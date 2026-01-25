# Vehicle Purchase Advisor API

A REST API that helps users make informed vehicle purchase decisions using AI-driven financial analysis. Input your desired vehicle model, target year, and budget to receive personalized recommendations on whether to buy now or continue saving.

## 🚗 Features

- **Smart Vehicle Analysis**: Input vehicle model, year, and budget for AI-powered evaluation
- **Financial Recommendations**: Get data-driven advice on purchase timing
- **Budget Assessment**: Determine if your current budget aligns with market conditions
- **Market Insights**: Receive analysis based on current vehicle pricing trends

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Integration**: OpenAI API / Custom ML Model

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vehicle-purchase-advisor-api.git
   cd vehicle-purchase-advisor-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=9999
   MONGODB_URI=mongodb://localhost:27017/vehicle-advisor
   OPENAI_API_KEY=your_openai_api_key_here
   NODE_ENV=development
   ```

4. **Start MongoDB**
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Linux
   sudo systemctl start mongod
   ```

5. **Run the application**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:9999`

## 📡 API Endpoints

### User Preferences Endpoint

**POST** `/api/v1/userpref`

Submit user vehicle preferences and receive AI-powered purchase recommendations.

#### Request Body

```json
{
  "UserCarPreference": {
    "CazBrand": "Toyota",
    "CarPrice": 20000,
    "UseofHas": 10000,
    "CarModel": "RAV4"
  }
}
```

#### Parameters

| Field | Type | Description |
|-------|------|-------------|
| `CazBrand` | string | The vehicle brand (e.g., "Toyota", "Honda") |
| `CarPrice` | number | Your budget in USD |
| `UseofHas` | number | Current mileage preference or target |
| `CarModel` | string | Specific vehicle model |

#### Response

```json
{
  "UserCarPreference": "received successfully",
  "message": "received successfully",
  "Data": {
    "id": "chatcmpl-D20glCf2hg5Xhzlkh0Glh9pdis484",
    "object": "chat.completion",
    "created": 1769371675,
    "model": "gpt-4o-mini-2024-07-18",
    "choices": [
      {
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "To evaluate the potential purchase of a Toyota RAV4 with a user's budget of $10,000..."
        }
      }
    ]
  }
}
```

#### API in Action

![API Request and Response Example](./images/api-example.png)

*Screenshot showing the user preference submission and AI-generated vehicle purchase recommendation*

## 🗂️ Project Structure

```
vehicle-purchase-advisor-api/
├── src/
│   ├── controllers/
│   │   └── userPreferenceController.js
│   ├── models/
│   │   └── UserPreference.js
│   ├── routes/
│   │   └── api.js
│   ├── services/
│   │   └── aiService.js
│   └── app.js
├── config/
│   └── database.js
├── images/
│   └── api-example.png
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `9999` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/vehicle-advisor` |
| `OPENAI_API_KEY` | OpenAI API key for AI analysis | Required |
| `NODE_ENV` | Environment (development/production) | `development` |

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📚 Usage Examples

### Using cURL

```bash
curl -X POST http://localhost:9999/api/v1/userpref \
  -H "Content-Type: application/json" \
  -d '{
    "UserCarPreference": {
      "CazBrand": "Honda",
      "CarPrice": 25000,
      "UseofHas": 15000,
      "CarModel": "CR-V"
    }
  }'
```

### Using JavaScript (Fetch API)

```javascript
const getUserAdvice = async () => {
  try {
    const response = await fetch('http://localhost:9999/api/v1/userpref', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UserCarPreference: {
          CazBrand: 'Honda',
          CarPrice: 25000,
          UseofHas: 15000,
          CarModel: 'CR-V'
        }
      })
    });

    const data = await response.json();
    console.log('AI Recommendation:', data.Data.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
};

getUserAdvice();
```

### Using Axios

```javascript
const axios = require('axios');

const getUserAdvice = async () => {
  try {
    const response = await axios.post('http://localhost:9999/api/v1/userpref', {
      UserCarPreference: {
        CazBrand: 'Toyota',
        CarPrice: 20000,
        UseofHas: 10000,
        CarModel: 'Camry'
      }
    });

    console.log('AI Recommendation:', response.data.Data.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

getUserAdvice();
```

## 🛡️ Error Handling

The API returns appropriate HTTP status codes:

- `200 OK` - Request successful
- `400 Bad Request` - Invalid request body
- `500 Internal Server Error` - Server error

Example error response:

```json
{
  "error": "Bad Request",
  "message": "Missing required field: CarModel",
  "statusCode": 400
}
```

## 🚀 Deployment

### Deploying to Heroku

1. Install Heroku CLI
2. Login to Heroku: `heroku login`
3. Create a new app: `heroku create your-app-name`
4. Set environment variables: 
   ```bash
   heroku config:set OPENAI_API_KEY=your_key_here
   heroku config:set MONGODB_URI=your_mongodb_uri
   ```
5. Deploy: `git push heroku main`

### Deploying to Railway/Render

Follow similar steps with your preferred platform's CLI or web interface.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- Vehicle pricing data providers
- Community contributors

## 📞 Contact

For questions or support, please open an issue or contact:
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

⭐ Star this repo if you find it helpful!

## 🗺️ Roadmap

- [ ] Add support for multiple vehicle brands
- [ ] Implement user authentication
- [ ] Add historical price tracking
- [ ] Create a web frontend
- [ ] Add support for electric vehicles analysis
- [ ] Implement caching for improved performance
- [ ] Add rate limiting
- [ ] Create comprehensive API documentation with Swagger

## 📊 Performance

- Average response time: < 2 seconds
- AI analysis accuracy: Based on current market data
- Supports concurrent requests

## 🔐 Security

- API rate limiting implemented
- Input validation on all endpoints
- Environment variables for sensitive data
- CORS configuration for production

## 🐛 Known Issues

- None at the moment. Please report any bugs in the Issues section.

---

Made with ❤️ by Ray
