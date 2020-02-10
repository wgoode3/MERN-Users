const express = require('express'),
 cookieParser = require("cookie-parser"),
         cors = require('cors'),
      db_name = 'userdemo',
         port = 8000,
          app = express();
    
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

require('./config/mongoose.config')(db_name);
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));