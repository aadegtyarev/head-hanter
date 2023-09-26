create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    login VARCHAR(120) UNIQUE,
    tg_login VARCHAR(120),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    closed BOOLEAN,
    position VARCHAR(255),
    role_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
    created_timestamp TIMESTAMP
);

create extension pgcrypto;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    value uuid default uuid_generate_v4() not null unique,
    expiration_date TIMESTAMP default now() + interval '14 day',
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE not null unique
);

create TABLE roles(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    short_name VARCHAR(25),
    created_timestamp TIMESTAMP
);

INSERT INTO roles (name, short_name, created_timestamp) values ('Администратор', 'Admin');
INSERT INTO roles (name, short_name, created_timestamp) values ('Менеджер вакансий', 'HR');
INSERT INTO roles (name, short_name, created_timestamp) values ('Начальник отдела', 'Boss');

create TABLE jobs(
    id SERIAL PRIMARY KEY,
    job_title VARCHAR(255),
    salary_from NUMERIC,
    salary_to NUMERIC,
    skills TEXT,
    education VARCHAR(255),
    experience VARCHAR(255),
    detail TEXT,
    closed BOOLEAN,
    created_timestamp TIMESTAMP,    
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    test_doc_id INTEGER REFERENCES test_docs(id) ON DELETE CASCADE
);

create TABLE responses(
    id SERIAL PRIMARY KEY,
    applicant_name VARCHAR(255),
    email VARCHAR(255),
    resume_url VARCHAR(255),
    education VARCHAR(255),
    experience VARCHAR(255),
    salary_desired NUMERIC,
    questionnaire_result NUMERIC,
    description TEXT,    
    result TEXT,
    skills TEXT,
    created_timestamp TIMESTAMP,
    closed BOOLEAN,
    job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    status INTEGER DEFAULT 1
);

create TABLE interviews(
    id SERIAL PRIMARY KEY,
    date_and_time TIMESTAMP,
    result TEXT,
    detail TEXT,
    closed BOOLEAN,
    created_timestamp TIMESTAMP,
    job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
    response_id INTEGER REFERENCES responses(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    interviewer_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

create TABLE test_docs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    remark VARCHAR(255),
    text TEXT,    
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    closed BOOLEAN,
    created_timestamp TIMESTAMP   
);

create TABLE response_statuses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
INSERT INTO response_statuses (name) values ('');
INSERT INTO response_statuses (name) values ('Интервью');
INSERT INTO response_statuses (name) values ('Отправлено тестовое');
INSERT INTO response_statuses (name) values ('Думаем');
INSERT INTO response_statuses (name) values ('Отправлен оффер');
INSERT INTO response_statuses (name) values ('Отказ');
INSERT INTO response_statuses (name) values ('Принят на работу');
