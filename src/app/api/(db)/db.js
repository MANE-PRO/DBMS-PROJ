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


async function signup(name, gender, email, age, password, country) {
    const connection = await getConnection();
    const result = await connection.execute("insert into users (name, gender, email, age, password, country) values (:name, :gender, :email, :age, :password, :country)", {
        name,
        gender,
        email,
        age,
        password,
        country
    })
    return result
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