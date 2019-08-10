-- Database implementation using postgres

--  create database cars
CREATE DATABASE Cars IF NOT EXISTS;

-- create table car sales
CREATE TABLE CarSales (
    id SERIAL PRIMARY KEY,
    CarMaker VARCHAR (50) NOT NULL,
    CarModel VARCHAR (200) NOT NULL,
    TotalSalesPrice NUMERIC (7, 2) NOT NULL,
    DateCreated TIMESTAMP
);

-- insert values into car sales
INSERT INTO CarSales (CarMaker, CarModel, TotalSalesPrice)
VALUES
    ('Maker A', 'A Model X V6', 100000), 
    ('Maker B', 'B Model Z V6', 200000), 
    ('Maker C', 'C Model Y 4000', 100000);

-- query total price per model
SELECT CarMaker, CarModel, TotalSalesPrice FROM CarSales WHERE DateCreated > now() - interval '30 days';
