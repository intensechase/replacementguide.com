CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(id),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  lifespan_min_years NUMERIC(4,1),
  lifespan_max_years NUMERIC(4,1),
  lifespan_summary TEXT NOT NULL,
  factors TEXT NOT NULL,
  warning_signs TEXT NOT NULL,
  repair_or_replace TEXT NOT NULL,
  maintenance_tips TEXT,
  replacement_cost_low INT,
  replacement_cost_high INT,
  repair_cost_low INT,
  repair_cost_high INT,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS amazon_products (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  amazon_url TEXT NOT NULL,
  image_url TEXT,
  price_range TEXT,
  sort_order INT DEFAULT 0
);

INSERT INTO categories (name, slug, description, sort_order) VALUES
  ('Home', 'home', 'Appliances, systems, and materials in your home', 1),
  ('Auto', 'auto', 'Car parts, tires, and vehicle components', 2),
  ('Personal', 'personal', 'Everyday items and personal products', 3),
  ('Outdoor', 'outdoor', 'Yard, deck, driveway, and exterior products', 4)
ON CONFLICT (slug) DO NOTHING;
