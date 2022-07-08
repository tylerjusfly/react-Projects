DROP DATABASE IF EXISTS tickets;
CREATE DATABASE tickets;

\c tickets

DROP TABLE IF EXISTS conversationTable,
                     messageTable;


CREATE TABLE conversationTable (
    id BIGSERIAL PRIMARY KEY,
    vendorId VARCHAR(200),
    customerMail VARCHAR(200),
    created_at TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE messageTable (
    id BIGSERIAL PRIMARY KEY,
    conversationId VARCHAR(200),
    sender VARCHAR(200),
    message_text TEXT,
    created_at TIMESTAMPTZ DEFAULT Now()
) 

