INSERT INTO roles (name, description) VALUES
  ('Super Admin', 'Full access to storefront and admin operations'),
  ('Admin', 'Manage products, customers, and store settings'),
  ('Manager', 'Support store operations and merchandising'),
  ('Order Manager', 'Manage order flow and fulfillment'),
  ('Product Manager', 'Manage products, pricing, and inventory')
ON CONFLICT (name) DO NOTHING;

INSERT INTO permissions (name, description) VALUES
  ('view_dashboard', 'Access dashboard analytics'),
  ('manage_products', 'Create and edit products'),
  ('manage_orders', 'Manage orders and fulfillment'),
  ('manage_customers', 'View and manage customers'),
  ('manage_coupons', 'Create and edit coupons'),
  ('manage_reviews', 'Moderate product reviews'),
  ('manage_settings', 'Manage store settings'),
  ('manage_users', 'Manage admin users')
ON CONFLICT (name) DO NOTHING;

INSERT INTO settings (key, value) VALUES
  ('store_name', '{"value": "O Store"}'),
  ('currency', '{"value": "INR"}'),
  ('tax_rate', '{"value": 5}'),
  ('shipping_fee', '{"value": 149}'),
  ('maintenance_mode', '{"value": false}')
ON CONFLICT (key) DO NOTHING;
