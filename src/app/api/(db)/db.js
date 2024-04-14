// connect to oracle db 
const oracledb = require('oracledb');
const fs = require('fs')

oracledb.autoCommit = true;

async function getConnection() {
    return await oracledb.getConnection({
        user: "system",
        password: "welcome123",
        connectString: "localhost/xe"
    });
}



async function signin(email, password) {
    const connection = await getConnection();
    const sql = `select * from patients where email = '${email}' and password = '${password}'`
    console.log(sql, email, password)
    const result = await connection.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    connection.close();
    const rs = result.rows;
    if (rs.length > 0) {
        rs[0].PASSWORD = "ENCRYPTED";
        return rs[0]
    }
    return {
        error: "Invalid email or password"
    }
}


async function signup(name, gender, email, age, password) {
    console.log(name, gender, email, age, password)
    let connection;
    try {
        connection = await getConnection();

        // Define output cursor
        let p_result = {
            type: oracledb.CURSOR,
            dir: oracledb.BIND_OUT
        };

        // Call the procedure
        const params = {
            p_age: age,
            p_pname: name,
            p_gender: gender,
            p_email: email,
            p_password: password,
            p_result: p_result
        };

        const result = await connection.execute(
            `BEGIN insert_patient(:p_age, :p_pname, :p_gender, :p_email, :p_password, :p_result); END;`,
            params
        );

        // Fetch the output cursor
        const resultSet = result.outBinds.p_result;
        let row;
        let resultData;

        while ((row = await resultSet.getRow())) {
            resultData = row;
        }

        // Close the resultSet
        await resultSet.close();
        if (resultData.length > 0) {
            return JSON.parse(resultData[0]);
        }
        return {
            error: "Invalid email or password"
        };

    } catch (err) {
        console.error("Error: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error("Error closing connection: ", err);
            }
        }
    }
}

async function search(cancerName) {
    const connection = await getConnection();
    const sql = `select * from plant where scientific_name like '%${cancerName}%'`
    console.log(sql)
    const result = await connection.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    connection.close();
    const rs = await result.rows;
    console.log(rs)
    return rs
}

async function getVendors(plant) {

    const connection = await getConnection();
    const sql = `select * from vendors where plant_name = '${plant}'`
    console.log(sql)
    const result = await connection.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    connection.close();
    const rs = await result.rows;
    console.log(rs)
    return rs
}

async function syncData() {
    const connection = await getConnection();
    const sql = fs.readFileSync('public/sql/schema.sql').toString();
    await connection.execute(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send("Query run successfully");
        }

    });
    connection.close();
}


export { signin, signup, search, getVendors, syncData }