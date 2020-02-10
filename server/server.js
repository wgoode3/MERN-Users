const express = require('express'),
         cors = require('cors'),
      db_name = 'userdemo',
         port = 8000,
          app = express();
    
app.use(cors());
app.use(express.json());

require('./config/mongoose.config')(db_name);
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));