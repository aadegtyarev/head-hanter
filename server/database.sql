create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    login VARCHAR(120) UNIQUE,
    tg_login VARCHAR(120),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    closed BOOLEAN,
    position VARCHAR(255),
    created_timestamp TIMESTAMP
);

create TABLE roles(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    created_timestamp TIMESTAMP
);

create TABLE user_roles(
    id SERIAL PRIMARY KEY,
    role_id INTEGER,
    user_id INTEGER,
    created_timestamp TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create TABLE jobs(
    id SERIAL PRIMARY KEY,
    job_title VARCHAR(255),
    salary_from NUMERIC,
    salary_to NUMERIC,
    skills TEXT,
    education VARCHAR(255),
    experience VARCHAR(255),
    test_doc TEXT,
    detail TEXT,
    closed BOOLEAN,
    created_timestamp TIMESTAMP,    
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
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
    created_timestamp TIMESTAMP,
    closed BOOLEAN,
    job_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (job_id) REFERENCES jobs (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

create TABLE interviews(
    id SERIAL PRIMARY KEY,
    date_and_time TIMESTAMP,
    result TEXT,
    detail TEXT,
    closed BOOLEAN,
    created_timestamp TIMESTAMP,
    job_id INTEGER,
    response_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (job_id) REFERENCES jobs (id),
    FOREIGN KEY (response_id) REFERENCES responses (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

