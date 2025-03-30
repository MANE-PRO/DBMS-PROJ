ALTER TABLE patients
ADD CONSTRAINT unique_email_patients UNIQUE (email);

CREATE TABLE plant (
    scientific_name VARCHAR2(100) PRIMARY KEY,
    medicinal_rating NUMBER,
    bioactivity VARCHAR2(100),
    edibility VARCHAR2(20)
);


CREATE TABLE vendors (
    plant_name VARCHAR2(100),
    sid NUMBER,
    sname VARCHAR2(100),
    sphone VARCHAR2(20),
    city VARCHAR2(100),
    street_no VARCHAR2(50),
    zip VARCHAR2(20),
    country VARCHAR2(100)
    FOREIGN KEY (plant_name) REFERENCES plant(scientific_name)
);

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Turmeric', 9, 'Anti-inflammatory, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Aloe vera', 8, 'Anti-inflammatory, wound healing', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Ginger', 9, 'Anti-inflammatory, digestive aid', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Garlic', 5, 'Anti-inflammatory, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Sugar Apple', 2, 'Anti-microbial, anti-cancer', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Goji', 3, 'Anti-oxidant, anti-tumor activity', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Spearmint', 3, 'Anti-cancer, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Apple Rose', 1, 'Improving heart health, promoting immunity', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Oats', 3, 'Anti-inflammatory, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Turnip', 2, 'Anti-lung cancer effect', 'Edible');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Turmeric', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India');
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Ginger', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Aloe vera', 1, 'Herbal Remedies', '123-456-7890', 'New York', '123 Main St', '10001', 'USA');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Garlic', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India');
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Oats', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Apple Rose', 4, 'Herb & Health', '123-236-7271', 'New York', '123 St', '10001', 'USA');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Spearmint', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India');
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Goji', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Garlic', 4, 'Herb & Health', '123-236-7271', 'New York', '123 St', '10001', 'USA');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Sugar Apple', 5, 'Golden Herb Co.', '555-123-4322', 'Bangalore', '789 Ave', '560001', 'India');

CREATE OR REPLACE PROCEDURE insert_patient(
    p_age IN NUMBER,
    p_pname IN VARCHAR2,
    p_gender IN VARCHAR2,
    p_email IN VARCHAR2,
    p_password IN VARCHAR2,
    p_result OUT SYS_REFCURSOR
)
IS
    v_email_regex VARCHAR2(100) := '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
    v_email_valid NUMBER;
BEGIN
    -- Check if email is valid
    SELECT REGEXP_COUNT(p_email, v_email_regex) INTO v_email_valid FROM dual;
	DBMS_OUTPUT.PUT_LINE('Patient inserted successfully.' || v_email_valid);
    IF v_email_valid = 0 THEN
        -- Invalid email, return error message
        OPEN p_result FOR
            SELECT '{"status": "error", "message": "Invalid email address"}' AS result FROM dual;
    ELSE
        -- Valid email, insert into the table
        DBMS_OUTPUT.PUT_LINE('Inserting Patient ');
        INSERT INTO patients(age, pname, gender, email, password)
        VALUES (p_age, p_pname, p_gender, p_email, p_password);

        -- Return success message
        OPEN p_result FOR
            SELECT '{"status": "success", "message": "Patient inserted successfully"}' AS result FROM dual;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        OPEN p_result FOR
    		
            SELECT '{"status": "error", "message": "An error occurred while inserting the patient"}' AS result FROM dual;
END;
/


CREATE TABLE  patients (
    pid NUMBER GENERATED by default on null as IDENTITY,
    age NUMBER,
    pname VARCHAR2(100),
    gender VARCHAR2(10),
    dob DATE,
    city VARCHAR2(100),
    street_no VARCHAR2(50),
    zip VARCHAR2(20),
    email VARCHAR2(256),
    password VARCHAR2(256),
    country VARCHAR2(100)
)
ALTER TABLE patients
ADD CONSTRAINT unique_email_patients UNIQUE (email);

CREATE TABLE plant (
    scientific_name VARCHAR2(100) PRIMARY KEY,
    medicinal_rating NUMBER,
    bioactivity VARCHAR2(100),
    edibility VARCHAR2(20)
);


CREATE TABLE vendors (
    plant_name VARCHAR2(100),
    sid NUMBER,
    sname VARCHAR2(100),
    sphone VARCHAR2(20),
    city VARCHAR2(100),
    street_no VARCHAR2(50),
    zip VARCHAR2(20),
    country VARCHAR2(100)
    FOREIGN KEY (plant_name) REFERENCES plant(scientific_name)
);

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Turmeric', 9, 'Anti-inflammatory, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Aloe vera', 8, 'Anti-inflammatory, wound healing', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Ginger', 9, 'Anti-inflammatory, digestive aid', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Garlic', 5, 'Anti-inflammatory, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Sugar Apple', 2, 'Anti-microbial, anti-cancer', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Goji', 3, 'Anti-oxidant, anti-tumor activity', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Spearmint', 3, 'Anti-cancer, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Apple Rose', 1, 'Improving heart health, promoting immunity', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Oats', 3, 'Anti-inflammatory, antioxidant', 'Edible');

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Turnip', 2, 'Anti-lung cancer effect', 'Edible');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Turmeric', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India');
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Ginger', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Aloe vera', 1, 'Herbal Remedies', '123-456-7890', 'New York', '123 Main St', '10001', 'USA');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Garlic', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India');
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Oats', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Apple Rose', 4, 'Herb & Health', '123-236-7271', 'New York', '123 St', '10001', 'USA');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Spearmint', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India');
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Goji', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Garlic', 4, 'Herb & Health', '123-236-7271', 'New York', '123 St', '10001', 'USA');

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Sugar Apple', 5, 'Golden Herb Co.', '555-123-4322', 'Bangalore', '789 Ave', '560001', 'India');
