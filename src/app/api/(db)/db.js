// connect to oracle db 
const oracledb = require('oracledb');

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
    const sql = `select * from patient where email = '${email}' and password = '${password}'`
    console.log(sql, email, password)
    const result = await connection.execute(sql, [], { outFormat: oracledb.OUT_FORMAT_OBJECT });
    connection.close();
    const rs = result.rows;
    if (rs.length > 0) {
        return rs[0]
    }
    return {
        error: "Invalid email or password"
    }
}


async function signup(name, gender, email, age, password) {
    let connection;
    try {
        connection = await getConnection();

        const result = await connection.execute(
            `BEGIN insert_patient('23', 'Krishna', 'F', 'jpcartilla40@gmail.com', 'password', :p_result); END;`,
            [{ dir: oracledb.BIND_OUT, type: oracledb.CURSOR }],
            { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        const resultSet = await result.outBinds.p_result;
        console.log(resultSet)
        if (resultSet) {
            let row;
            while ((row = await resultSet.getRow())) {
                const resultJSON = JSON.parse(row.RESULT);
                console.log(resultJSON);
                // Parse JSON and handle accordingly
            }
            await resultSet.close();
        } else {
            console.error("Result set is undefined");
        }
    } catch (error) {
        console.error(error);
        // Handle error appropriately
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error(error);
            }
        }
    }
}

async function search(searchText, allergies) {
    // CALL A STORED PROCESDURE WITH PARAMETERS
    const connection = await getConnection();
    const result = await connection.execute("BEGIN SEARCH(:searchText, :allergies); END;", {
        searchText,
        allergies
    })
    return result
}

export { signin, signup, search }