# NPS Feedback System
A beautiful, responsive Net Promoter Score (NPS) feedback system built with React and Bootstrap 5. Collect customer feedback with an intuitive interface and visualize results in real-time.

## ✨ Features

- 🎨 **Modern UI**: Attractive design with animations and visual feedback
- 📊 **NPS Calculation**: Automatic calculation of Net Promoter Score
- 📱 **Fully Responsive**: Works on all device sizes
- 💾 **Real-time Stats**: Track promoters, passives, and detractors
- 😊 **Emoji Feedback**: Visual representation of customer sentiment
- 🚀 **Zero Custom CSS**: Pure Bootstrap implementation
- ⚡ **Fast Performance**: Built with Vite for optimal loading

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nps-feedback.git
cd nps-feedback
Install dependencies:
```

2. Install dependencies:
npm install

3. Install required packages:
npm install bootstrap bootstrap-icons


🏗️ Project Structure
src/
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── components/
    └── NPSModal.jsx   # Feedback modal component


📈 NPS Calculation
The system calculates NPS using the standard formula:

NPS = % Promoters (9-10 ratings) - % Detractors (0-6 ratings)

Categories:
Promoters: 9-10 ratings
Passives: 7-8 ratings
Detractors: 0-6 ratings

🧰 Technical Stack
⚛️ React 18
🎨 Bootstrap 5
✨ Bootstrap Icons
⚡ Vite (Build Tool)
📦 npm (Package Manager)

🚀 Usage
After installation, run the development server:
npm run dev