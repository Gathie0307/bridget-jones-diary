CREATE TABLE entries (
    id INT GENERATED ALWAYS AS IDENTITY,
    entry_date TIMESTAMP NOT NULL,
    category VARCHAR(30) NOT NULL,
    description VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO entries (entry_date, category, description)
VALUES
  ('2025-07-24 08:30:00', 'health', 'Went to the gym and felt great afterward.'),
  ('2025-07-23 14:00:00', 'work', 'Had a long meeting at work, made good progress on the project.'),
  ('2025-07-22 20:15:00', 'social', 'Watched a movie with friends. It was fun and relaxing.'),
  ('2025-07-21 10:45:00', 'personal development', 'Started reading a new book on mindfulness. Interesting stuff.'),
  ('2025-07-20 18:00:00', 'mental health', 'Felt overwhelmed today. Took some time to journal and reflect.');
