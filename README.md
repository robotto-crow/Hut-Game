# 🏔️ Mitch Likes Huts

A geography guessing game featuring mountain huts from around the world. Guess which country each hut is located in, and watch Mitch react to your answers!

## 🎮 How to Play

1. Look at the mountain hut image
2. Click on the world map to guess which country it's in
3. The closer you are, the more points you earn!
4. Play through 10 rounds and try to beat your high score

## ✨ Features

### Core Gameplay
- **10 unique mountain huts** from around the world (New Zealand, USA, Canada, Argentina, Ecuador, Italy, France, Spain, Norway, Tanzania)
- **Interactive Leaflet map** - click any country to make your guess
- **Distance-based scoring** - 1000 points for correct country, decreasing with distance
- **Mitch's reactions** - watch Mitch react based on how close your guess is!

### Enhanced Features (v2.0 - by Crow 🪶)

- **🏆 High Scores** - Your best score is saved locally and persists between sessions
- **📊 Statistics** - Track games played, average score, and best streak
- **📅 Daily Challenge** - Same huts for everyone worldwide each day!
  - Seeded random ensures identical order globally
  - Separate daily high score tracking
  - Daily streak counter (consecutive days played)
  - Only 1 hint allowed (harder mode!)
- **🔥 Streak Bonuses** - Consecutive correct guesses earn bonus points:
  - 2 in a row: +10%
  - 3 in a row: +20%
  - 4 in a row: +30%
  - 5+ in a row: up to +50%
- **💡 Hints** - 3 hints per game in random mode (1 in daily), costs 20% of round's points
- **📋 Share Results** - Wordle-style shareable results text (includes daily date & streak)
- **🎉 Confetti** - Celebration animation on new high scores!
- **📱 Mobile Support** - Responsive design works on phones and tablets

## 🏔️ Scoring System

| Result | Points |
|--------|--------|
| Correct country | 1,000 |
| < 1,500 km away | ~880+ |
| < 4,000 km away | ~680+ |
| < 8,000 km away | ~360+ |
| > 8,000 km away | 50+ |

**Maximum possible score:** 10,000 points (+ streak bonuses)

## 😊 Mitch's Reactions

| Distance | Reaction |
|----------|----------|
| Correct! | 🏆 Ecstatic |
| < 1,500 km | 😎 Impressed |
| < 4,000 km | 🤔 Thoughtful |
| < 8,000 km | 😕 Disappointed |
| > 8,000 km | 😱 Dismayed |

## 🛠️ Technical Details

- Pure vanilla JavaScript (no frameworks)
- [Leaflet.js](https://leafletjs.com/) for the interactive map
- [CartoDB Dark tiles](https://carto.com/basemaps/) for the map background
- GeoJSON country boundaries from [datasets/geo-countries](https://github.com/datasets/geo-countries)
- LocalStorage for persistent stats and high scores

## 🚀 Running Locally

Just open `index.html` in a modern browser. No build step required!

Or serve it locally:
```bash
npx serve .
# or
python -m http.server 8000
```

## 📁 Project Structure

```
Hut-Game/
├── index.html      # Main HTML structure
├── game.js         # Game logic, state, scoring
├── styles.css      # All styling
├── images/         # Hut photos and Mitch reactions
└── README.md       # This file
```

## 🎯 Future Ideas

- [ ] More huts from more countries
- [x] ~~Daily challenge mode~~ ✅ Added!
- [ ] Difficulty modes (Easy/Normal/Hard)
- [ ] Sound effects (optional)
- [ ] Global leaderboards
- [ ] Multiplayer mode
- [ ] Time-based bonus points
- [ ] Achievement badges

## 👤 Credits

- **Original concept & Mitch photos:** Mr-Robotto-66
- **Hut images:** Various sources
- **Enhancements (v2.0):** Crow 🪶

---

*Made for Mitch, who really likes huts.*
