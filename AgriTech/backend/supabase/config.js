const supabaseConfig = {
    // Supabase connection configuration
    supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_ANON_KEY,
      options: {
        schema: 'public',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    },
  
    // Table names matching schema.sql
    tables: {
      buyers: 'buyers',
      collectionCenters: 'collection_centers',
      orders: 'orders',
      messages: 'messages'
    },
  
    // Column definitions for data validation
    schemas: {
      buyers: {
        required: ['email', 'name'],
        properties: {
          name: { maxLength: 255 },
          email: { maxLength: 255 },
          region: { maxLength: 255 },
          delivery_location: { maxLength: 255 }
        }
      },
      collectionCenters: {
        required: ['name', 'location'],
        properties: {
          name: { maxLength: 255 },
          contact: { maxLength: 20 },
          location: { maxLength: 255 }
        }
      },
      orders: {
        required: ['buyer_id', 'quantity'],
        properties: {
          status: { maxLength: 50 }
        }
      }
    },
  
    // API endpoints
    endpoints: {
      analytics: '/api/analytics',
      buyers: '/api/buyers',
      chat: '/api/chat',
      collections: '/api/collections'
    }
  };
  
  // Environment-specific overrides
  const environmentConfigs = {
    development: {
      apiBaseUrl: 'http://localhost:3000',
      debug: true
    },
    production: {
      apiBaseUrl: process.env.API_URL,
      debug: false
    }
  };
  
  // Merge environment-specific config with base config
  const environment = process.env.NODE_ENV || 'development';
  const config = {
    ...supabaseConfig,
    ...environmentConfigs[environment]
  };
  
  export default config;