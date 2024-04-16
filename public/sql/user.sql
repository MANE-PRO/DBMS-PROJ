ALTER TABLE patients
ADD CONSTRAINT unique_email_patients UNIQUE (email) 

CREATE TABLE plant (
    scientific_name VARCHAR2(100) PRIMARY KEY,
    medicinal_rating NUMBER,
    bioactivity VARCHAR2(100),
    edibility VARCHAR2(20)
)


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
)

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Turmeric', 9, 'Anti-inflammatory, antioxidant', 'Edible')

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Aloe vera', 8, 'Anti-inflammatory, wound healing', 'Edible')

INSERT INTO plant (scientific_name, medicinal_rating, bioactivity, edibility)
VALUES ('Ginger', 9, 'Anti-inflammatory, digestive aid', 'Edible')

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Turmeric', 3, 'Golden Spice Co.', '555-123-4567', 'Bangalore', '789 Spice Ave', '560001', 'India')
INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Ginger', 2, 'Spice Emporium', '987-654-3210', 'London', '456 High St', 'SW1A 1AA', 'UK')

INSERT INTO vendors (plant_name, sid, sname, sphone, city, street_no, zip, country)
VALUES ('Aloe vera', 1, 'Herbal Remedies', '123-456-7890', 'New York', '123 Main St', '10001', 'USA')