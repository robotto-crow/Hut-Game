// Hut Data Array
const huts = [
    {
        name: "Mueller Hut",
        country: "New Zealand",
        countryCode: "NZL",
        image: "images/Mueller_Hut.png",
        lat: -43.5321,
        lon: 170.1419
    },
    {
        name: "Lakes of the Clouds Hut",
        country: "USA",
        countryCode: "USA",
        image: "images/Lakes of the Clouds Hut.png",
        lat: 44.2583,
        lon: -71.3186
    },
    {
        name: "Neil Colgan Hut",
        country: "Canada",
        countryCode: "CAN",
        image: "images/Neil Colgan Hut.png",
        lat: 51.2994,
        lon: -116.2500
    },
    {
        name: "Refugio Emilio Frey",
        country: "Argentina",
        countryCode: "ARG",
        image: "images/Refugio Emilio Frey.jpg",
        lat: -41.2500,
        lon: -71.8167
    },
    {
        name: "Refugio José Rivas (Cotopaxi)",
        country: "Ecuador",
        countryCode: "ECU",
        image: "images/Refugio Jose Rivas.png",
        lat: -0.6833,
        lon: -78.4333
    },
    {
        name: "Capanna Margherita",
        country: "Italy",
        countryCode: "ITA",
        image: "images/Capanna Margherita.png",
        lat: 45.9333,
        lon: 7.8667
    },
    {
        name: "Refuge du Goûter",
        country: "France",
        countryCode: "FRA",
        image: "images/Refuge du Gouter.png",
        lat: 45.8500,
        lon: 6.8500
    },
    {
        name: "Refugio de Góriz",
        country: "Spain",
        countryCode: "ESP",
        image: "images/Refugio de Goriz.png",
        lat: 42.6833,
        lon: -0.0333
    },
    {
        name: "Fannaråkhytta",
        country: "Norway",
        countryCode: "NOR",
        image: "images/Fannarakhytta.png",
        lat: 61.5167,
        lon: 7.9000
    },
    {
        name: "Kibo Hut (Kilimanjaro)",
        country: "Tanzania",
        countryCode: "TZA",
        image: "images/Kibo Hut.png",
        lat: -3.0667,
        lon: 37.3500
    }
];

// Country centroids for distance calculation (using ISO 3166-1 alpha-3 codes)
const countryCentroids = {
    "NZL": { lat: -40.9006, lon: 174.8860 },
    "USA": { lat: 39.8283, lon: -98.5795 },
    "CAN": { lat: 56.1304, lon: -106.3468 },
    "ARG": { lat: -38.4161, lon: -63.6167 },
    "ECU": { lat: -1.8312, lon: -78.1834 },
    "ITA": { lat: 41.8719, lon: 12.5674 },
    "FRA": { lat: 46.2276, lon: 2.2137 },
    "ESP": { lat: 40.4637, lon: -3.7492 },
    "NOR": { lat: 60.4720, lon: 8.4689 },
    "TZA": { lat: -6.3690, lon: 34.8888 },
    // Additional countries for world coverage
    "GBR": { lat: 55.3781, lon: -3.4360 },
    "DEU": { lat: 51.1657, lon: 10.4515 },
    "AUS": { lat: -25.2744, lon: 133.7751 },
    "BRA": { lat: -14.2350, lon: -51.9253 },
    "CHN": { lat: 35.8617, lon: 104.1954 },
    "IND": { lat: 20.5937, lon: 78.9629 },
    "JPN": { lat: 36.2048, lon: 138.2529 },
    "RUS": { lat: 61.5240, lon: 105.3188 },
    "MEX": { lat: 23.6345, lon: -102.5528 },
    "ZAF": { lat: -30.5595, lon: 22.9375 },
    "CHE": { lat: 46.8182, lon: 8.2275 },
    "AUT": { lat: 47.5162, lon: 14.5501 },
    "PRT": { lat: 39.3999, lon: -8.2245 },
    "GRC": { lat: 39.0742, lon: 21.8243 },
    "SWE": { lat: 60.1282, lon: 18.6435 },
    "FIN": { lat: 61.9241, lon: 25.7482 },
    "DNK": { lat: 56.2639, lon: 9.5018 },
    "IRL": { lat: 53.4129, lon: -8.2439 },
    "BEL": { lat: 50.5039, lon: 4.4699 },
    "NLD": { lat: 52.1326, lon: 5.2913 },
    "POL": { lat: 51.9194, lon: 19.1451 },
    "CZE": { lat: 49.8175, lon: 15.4730 },
    "SVK": { lat: 48.6690, lon: 19.6990 },
    "HUN": { lat: 47.1625, lon: 19.5033 },
    "ROU": { lat: 45.9432, lon: 24.9668 },
    "BGR": { lat: 42.7339, lon: 25.4858 },
    "TUR": { lat: 38.9637, lon: 35.2433 },
    "ISR": { lat: 31.0461, lon: 34.8516 },
    "EGY": { lat: 26.0975, lon: 30.0444 },
    "KEN": { lat: -0.0236, lon: 37.9062 },
    "ETH": { lat: 9.1450, lon: 38.7667 },
    "UGA": { lat: 1.3733, lon: 32.2903 },
    "RWA": { lat: -1.9403, lon: 29.8739 },
    "CHL": { lat: -35.6751, lon: -71.5430 },
    "PER": { lat: -9.1900, lon: -75.0152 },
    "BOL": { lat: -16.2902, lon: -63.5887 },
    "COL": { lat: 4.5709, lon: -74.2973 },
    "VEN": { lat: 6.4238, lon: -66.5897 },
    "URY": { lat: -32.5228, lon: -55.7658 },
    "PRY": { lat: -23.4425, lon: -58.4438 },
    "CRI": { lat: 9.7489, lon: -83.7534 },
    "PAN": { lat: 8.5380, lon: -80.7821 },
    "GTM": { lat: 15.7835, lon: -90.2308 },
    "HND": { lat: 15.2000, lon: -86.2419 },
    "NIC": { lat: 12.2650, lon: -85.2072 },
    "CUB": { lat: 21.5218, lon: -77.7812 },
    "DOM": { lat: 18.7357, lon: -70.1627 },
    "JAM": { lat: 18.1096, lon: -77.2975 },
    "ISL": { lat: 64.9631, lon: -19.0208 },
    "GRL": { lat: 71.7069, lon: -42.6043 },
    "IDN": { lat: -0.7893, lon: 113.9213 },
    "MYS": { lat: 4.2105, lon: 101.9758 },
    "THA": { lat: 15.8700, lon: 100.9925 },
    "VNM": { lat: 14.0583, lon: 108.2772 },
    "PHL": { lat: 12.8797, lon: 121.7740 },
    "KOR": { lat: 35.9078, lon: 127.7669 },
    "PRK": { lat: 40.3399, lon: 127.5101 },
    "PAK": { lat: 30.3753, lon: 69.3451 },
    "AFG": { lat: 33.9391, lon: 67.7100 },
    "IRN": { lat: 32.4279, lon: 53.6880 },
    "IRQ": { lat: 33.2232, lon: 43.6793 },
    "SAU": { lat: 23.8859, lon: 45.0792 },
    "ARE": { lat: 23.4241, lon: 53.8478 },
    "NGA": { lat: 9.0820, lon: 8.6753 },
    "GHA": { lat: 7.9465, lon: -1.0232 },
    "MAR": { lat: 31.7917, lon: -7.0926 },
    "DZA": { lat: 28.0339, lon: 1.6596 },
    "TUN": { lat: 33.8869, lon: 9.5375 },
    "LBY": { lat: 26.3351, lon: 17.2283 },
    "SDN": { lat: 12.8628, lon: 30.2176 },
    "COD": { lat: -4.0383, lon: 21.7587 },
    "AGO": { lat: -11.2027, lon: 17.8739 },
    "MOZ": { lat: -18.6657, lon: 35.5296 },
    "ZWE": { lat: -19.0154, lon: 29.1549 },
    "BWA": { lat: -22.3285, lon: 24.6849 },
    "NAM": { lat: -22.9576, lon: 18.4904 },
    "ZMB": { lat: -13.1339, lon: 27.8493 },
    "MWI": { lat: -13.2543, lon: 34.3015 },
    "MDG": { lat: -18.7669, lon: 46.8691 },
    "MMR": { lat: 21.9162, lon: 95.9560 },
    "NPL": { lat: 28.3949, lon: 84.1240 },
    "BGD": { lat: 23.6850, lon: 90.3563 },
    "LKA": { lat: 7.8731, lon: 80.7718 },
    "KAZ": { lat: 48.0196, lon: 66.9237 },
    "UZB": { lat: 41.3775, lon: 64.5853 },
    "TKM": { lat: 38.9697, lon: 59.5563 },
    "MNG": { lat: 46.8625, lon: 103.8467 },
    "UKR": { lat: 48.3794, lon: 31.1656 },
    "BLR": { lat: 53.7098, lon: 27.9534 },
    "LTU": { lat: 55.1694, lon: 23.8813 },
    "LVA": { lat: 56.8796, lon: 24.6032 },
    "EST": { lat: 58.5953, lon: 25.0136 },
    "HRV": { lat: 45.1000, lon: 15.2000 },
    "SVN": { lat: 46.1512, lon: 14.9955 },
    "SRB": { lat: 44.0165, lon: 21.0059 },
    "BIH": { lat: 43.9159, lon: 17.6791 },
    "ALB": { lat: 41.1533, lon: 20.1683 },
    "MKD": { lat: 41.5124, lon: 21.7453 },
    "MNE": { lat: 42.7087, lon: 19.3744 },
    "XKX": { lat: 42.6026, lon: 20.9030 },
    "PNG": { lat: -6.3150, lon: 143.9555 },
    "SLV": { lat: 13.7942, lon: -88.8965 },
    "BLZ": { lat: 17.1899, lon: -88.4976 },
    "GUY": { lat: 4.8604, lon: -58.9302 },
    "SUR": { lat: 3.9193, lon: -56.0278 },
    "GUF": { lat: 3.9339, lon: -53.1258 }
};

// Game State
let gameState = {
    currentRound: 0,
    score: 0,
    shuffledHuts: [],
    currentHut: null,
    guessedCountryCode: null,
    roundResults: [],
    state: 'waiting' // 'waiting', 'guessed', 'next_round'
};

// Leaflet map and layers
let map = null;
let countriesLayer = null;
let countryLayers = {}; // Store references to each country layer
let markerLayer = null;
let geoJsonData = null;

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Haversine Formula for Distance Calculation
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Calculate Score based on distance
function calculateScore(distanceKm) {
    return Math.max(50, Math.round(1000 - (distanceKm * 0.08)));
}

// Get Mitch Reaction based on distance
function getMitchReaction(distanceKm) {
    if (distanceKm === 0) {
        return {
            image: "images/mitch ecstatic.jpg",
            text: "You found me! 🏆"
        };
    } else if (distanceKm < 1500) {
        return {
            image: "images/mitch impressed.jpg",
            text: "So close!"
        };
    } else if (distanceKm < 4000) {
        return {
            image: "images/mitch thoughtful.jpg",
            text: "Getting warmer..."
        };
    } else if (distanceKm < 8000) {
        return {
            image: "images/mitch disappointed.jpg",
            text: "Bit of a trek!"
        };
    } else {
        return {
            image: "images/mitch dismayed.jpg",
            text: "Wrong continent!"
        };
    }
}

// Default country style
function getDefaultStyle() {
    return {
        fillColor: '#3498db',
        weight: 1,
        opacity: 1,
        color: '#1a3a5c',
        fillOpacity: 0.7
    };
}

// Hover style
function getHoverStyle() {
    return {
        fillColor: '#f39c12',
        weight: 2,
        color: '#e67e22',
        fillOpacity: 0.9
    };
}

// Guessed country style (wrong)
function getGuessedStyle() {
    return {
        fillColor: '#e74c3c',
        weight: 3,
        color: '#c0392b',
        fillOpacity: 0.9
    };
}

// Correct country style
function getCorrectStyle() {
    return {
        fillColor: '#2ecc71',
        weight: 3,
        color: '#27ae60',
        fillOpacity: 0.9
    };
}

// Initialize Game
function initGame() {
    gameState.shuffledHuts = shuffleArray(huts);
    gameState.currentRound = 0;
    gameState.score = 0;
    gameState.roundResults = [];
    gameState.state = 'waiting';
    
    updateScoreDisplay();
    updateRoundDisplay();
    initMap();
}

// Initialize Leaflet Map
function initMap() {
    // Create map if it doesn't exist
    if (!map) {
        map = L.map('map-container', {
            center: [20, 0],
            zoom: 2,
            minZoom: 1,
            maxZoom: 6,
            worldCopyJump: true,
            maxBounds: [[-90, -180], [90, 180]],
            maxBoundsViscosity: 1.0
        });
        
        // Add a dark tile layer as background
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);
        
        // Create marker layer group
        markerLayer = L.layerGroup().addTo(map);
    }
    
    // Load GeoJSON countries
    loadCountries();
}

// Load countries GeoJSON
function loadCountries() {
    // Use a reliable GeoJSON source for world countries
    const geoJsonUrl = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';
    
    fetch(geoJsonUrl)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load countries');
            return response.json();
        })
        .then(data => {
            geoJsonData = data;
            createCountriesLayer();
            startRound();
        })
        .catch(error => {
            console.error('Error loading countries:', error);
            // Try alternative source
            loadCountriesAlternative();
        });
}

// Alternative GeoJSON source
function loadCountriesAlternative() {
    const altUrl = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json';
    
    fetch(altUrl)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load countries from alternative');
            return response.json();
        })
        .then(data => {
            geoJsonData = data;
            createCountriesLayer();
            startRound();
        })
        .catch(error => {
            console.error('Error loading countries from alternative:', error);
            alert('Could not load world map. Please check your internet connection and refresh.');
        });
}

// Map country names to ISO codes for fallback
const countryNameToCode = {
    'united states of america': 'USA',
    'united states': 'USA',
    'usa': 'USA',
    'canada': 'CAN',
    'new zealand': 'NZL',
    'argentina': 'ARG',
    'argentine republic': 'ARG',
    'ecuador': 'ECU',
    'italy': 'ITA',
    'italian republic': 'ITA',
    'france': 'FRA',
    'french republic': 'FRA',
    'spain': 'ESP',
    'kingdom of spain': 'ESP',
    'norway': 'NOR',
    'kingdom of norway': 'NOR',
    'tanzania': 'TZA',
    'united republic of tanzania': 'TZA'
};

// Map alternative/short codes to standard ISO A3 codes
const codeNormalization = {
    'US': 'USA',
    'NZ': 'NZL',
    'AR': 'ARG',
    'EC': 'ECU',
    'IT': 'ITA',
    'FR': 'FRA',
    'ES': 'ESP',
    'NO': 'NOR',
    'TZ': 'TZA',
    'CA': 'CAN'
};

// Get normalized country code from feature
function getCountryCodeFromFeature(feature) {
    // Try ISO_A3_EH first (handles -99 cases properly)
    let code = feature.properties.ISO_A3_EH ||
               feature.properties.ISO_A3 || 
               feature.properties.iso_a3 || 
               feature.properties.ISO3 ||
               feature.properties.id ||
               feature.id;
    
    // Normalize 2-letter codes to 3-letter codes
    if (code && codeNormalization[code]) {
        code = codeNormalization[code];
    }
    
    // Handle -99 or invalid codes by looking up from country name
    if (!code || code === '-99' || code === -99 || code === '-1' || code === -1) {
        const name = (feature.properties.ADMIN || 
                     feature.properties.name || 
                     feature.properties.NAME || '').toLowerCase().trim();
        code = countryNameToCode[name] || code;
    }
    
    return code;
}

// Normalize a country code for comparison (handles cases where click code differs from stored code)
function normalizeCountryCode(code) {
    if (!code) return code;
    // First check if it's a 2-letter code that needs conversion
    if (codeNormalization[code]) {
        return codeNormalization[code];
    }
    return code;
}

// Create countries layer from GeoJSON
function createCountriesLayer() {
    if (countriesLayer) {
        map.removeLayer(countriesLayer);
    }
    
    countryLayers = {};
    
    countriesLayer = L.geoJSON(geoJsonData, {
        style: getDefaultStyle,
        onEachFeature: function(feature, layer) {
            // Get country code using robust detection
            const countryCode = getCountryCodeFromFeature(feature);
            
            const countryName = feature.properties.ADMIN || 
                               feature.properties.name ||
                               feature.properties.NAME ||
                               'Unknown';
            
            if (countryCode) {
                countryLayers[countryCode] = layer;
                layer.countryCode = countryCode;
                layer.countryName = countryName;
            }
            
            // Add hover effects
            layer.on({
                mouseover: function(e) {
                    if (gameState.state === 'waiting') {
                        const layer = e.target;
                        layer.setStyle(getHoverStyle());
                        layer.bringToFront();
                    }
                },
                mouseout: function(e) {
                    if (gameState.state === 'waiting') {
                        const layer = e.target;
                        layer.setStyle(getDefaultStyle());
                    }
                },
                click: function(e) {
                    if (gameState.state === 'waiting') {
                        const layer = e.target;
                        handleCountryClick(layer.countryCode, layer.countryName, layer);
                    }
                }
            });
        }
    }).addTo(map);
}

// Calculate centroid from GeoJSON geometry
function calculateGeometryCentroid(geometry) {
    let totalLat = 0;
    let totalLon = 0;
    let count = 0;
    
    function processCoords(coords) {
        if (typeof coords[0] === 'number') {
            // This is a coordinate pair [lon, lat]
            totalLon += coords[0];
            totalLat += coords[1];
            count++;
        } else {
            // This is an array of coordinates
            coords.forEach(c => processCoords(c));
        }
    }
    
    if (geometry && geometry.coordinates) {
        processCoords(geometry.coordinates);
    }
    
    if (count > 0) {
        return { lat: totalLat / count, lon: totalLon / count };
    }
    return null;
}

// Handle country click
function handleCountryClick(countryCode, countryName, layer) {
    if (gameState.state !== 'waiting') return;
    
    // Normalize the country code for consistent comparison
    const normalizedGuessCode = normalizeCountryCode(countryCode);
    
    gameState.guessedCountryCode = normalizedGuessCode;
    gameState.state = 'guessed';
    
    // Calculate distance and score
    // First try lookup table with normalized code, then original code
    let guessedCentroid = countryCentroids[normalizedGuessCode] || countryCentroids[countryCode];
    
    // If not in lookup table, calculate from the GeoJSON geometry
    if (!guessedCentroid && layer && layer.feature && layer.feature.geometry) {
        guessedCentroid = calculateGeometryCentroid(layer.feature.geometry);
    }
    
    const correctCode = gameState.currentHut.countryCode;
    const correctCentroid = countryCentroids[correctCode];
    
    let distanceKm = 0;
    if (normalizedGuessCode === correctCode) {
        // Correct country guessed
        distanceKm = 0;
    } else if (guessedCentroid) {
        // Calculate distance from guessed centroid to actual hut location
        distanceKm = haversineDistance(
            guessedCentroid.lat,
            guessedCentroid.lon,
            gameState.currentHut.lat,
            gameState.currentHut.lon
        );
    } else {
        // Last resort fallback
        distanceKm = 5000;
    }
    
    const points = calculateScore(distanceKm);
    gameState.score += points;
    
    // Store round result
    gameState.roundResults.push({
        hut: gameState.currentHut,
        guessedCountryCode: countryCode,
        guessedCountryName: countryName,
        distanceKm: distanceKm,
        points: points
    });
    
    // Highlight guessed country (try normalized code first, then original)
    const guessedLayer = countryLayers[normalizedGuessCode] || countryLayers[countryCode];
    if (guessedLayer) {
        guessedLayer.setStyle(getGuessedStyle());
        guessedLayer.bringToFront();
    }
    
    // Highlight correct country
    if (countryLayers[correctCode]) {
        countryLayers[correctCode].setStyle(getCorrectStyle());
        countryLayers[correctCode].bringToFront();
        
        // Add pulsing effect to correct country
        startPulseAnimation(countryLayers[correctCode]);
    }
    
    // Add marker at hut location
    const hutMarker = L.marker([gameState.currentHut.lat, gameState.currentHut.lon], {
        icon: L.divIcon({
            className: 'hut-marker',
            html: `<div class="hut-marker-inner">
                <div class="hut-marker-label">${gameState.currentHut.name}</div>
                <div class="hut-marker-pin">📍</div>
            </div>`,
            iconSize: [150, 50],
            iconAnchor: [75, 50]
        })
    });
    markerLayer.addLayer(hutMarker);
    
    // Pan to show both guessed and correct
    try {
        const bounds = L.latLngBounds([
            [gameState.currentHut.lat, gameState.currentHut.lon]
        ]);
        if (guessedCentroid) {
            bounds.extend([guessedCentroid.lat, guessedCentroid.lon]);
        }
        map.fitBounds(bounds.pad(0.5), { maxZoom: 4 });
    } catch (e) {
        // If bounds fail, just pan to correct location
        map.setView([gameState.currentHut.lat, gameState.currentHut.lon], 4);
    }
    
    // Update Mitch reaction
    const reaction = getMitchReaction(distanceKm);
    setTimeout(() => {
        document.getElementById('mitch-image').src = reaction.image;
    }, 300);
    
    // Show points and next button
    document.getElementById('points-earned').textContent = points;
    document.getElementById('round-points').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('hut-name-display').classList.remove('hidden');
    
    // Show appropriate message based on whether guess was correct
    if (normalizedGuessCode === correctCode) {
        document.getElementById('hut-instruction').textContent = `✅ Correct! You found the hut!`;
    } else {
        document.getElementById('hut-instruction').textContent = `Distance: ${Math.round(distanceKm).toLocaleString()} km away`;
    }
    
    updateScoreDisplay();
}

// Pulse animation for correct country
let pulseInterval = null;
function startPulseAnimation(layer) {
    if (pulseInterval) clearInterval(pulseInterval);
    
    let opacity = 0.9;
    let increasing = false;
    
    pulseInterval = setInterval(() => {
        if (gameState.state !== 'guessed') {
            clearInterval(pulseInterval);
            return;
        }
        
        opacity += increasing ? 0.05 : -0.05;
        if (opacity <= 0.5) increasing = true;
        if (opacity >= 0.9) increasing = false;
        
        layer.setStyle({
            ...getCorrectStyle(),
            fillOpacity: opacity
        });
    }, 50);
}

// Start a new round
function startRound() {
    if (gameState.currentRound >= 10) {
        endGame();
        return;
    }
    
    // Clear pulse animation
    if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
    }
    
    gameState.currentHut = gameState.shuffledHuts[gameState.currentRound];
    gameState.guessedCountryCode = null;
    gameState.state = 'waiting';
    
    // Update UI
    document.getElementById('hut-image').src = gameState.currentHut.image;
    document.getElementById('hut-name-display').textContent = gameState.currentHut.name;
    document.getElementById('hut-name-display').classList.add('hidden');
    document.getElementById('hut-instruction').textContent = "Where is this hut?";
    
    // Reset Mitch to idle
    document.getElementById('mitch-image').src = "images/Mitch.jpg";
    
    // Hide round points and next button
    document.getElementById('round-points').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    
    // Reset map
    resetMap();
    
    gameState.currentRound++;
    updateRoundDisplay();
}

// Reset map styles
function resetMap() {
    // Clear markers
    if (markerLayer) {
        markerLayer.clearLayers();
    }
    
    // Reset all country styles - use eachLayer to ensure ALL layers are reset
    // including any that might not be in countryLayers
    if (countriesLayer) {
        countriesLayer.eachLayer(function(layer) {
            layer.setStyle(getDefaultStyle());
        });
    }
    
    // Reset map view
    map.setView([20, 0], 2);
}

// Update score display
function updateScoreDisplay() {
    document.getElementById('current-score').textContent = gameState.score;
}

// Update round display
function updateRoundDisplay() {
    document.getElementById('current-round').textContent = gameState.currentRound;
}

// End game
function endGame() {
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent = gameState.score;
    
    const breakdown = document.getElementById('results-breakdown');
    breakdown.innerHTML = '';
    
    gameState.roundResults.forEach(result => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <img src="${result.hut.image}" alt="${result.hut.name}">
            <div class="hut-name">${result.hut.name}</div>
            <div class="country-name">${result.hut.country}</div>
            <div class="points">${result.points} pts</div>
        `;
        breakdown.appendChild(item);
    });
}

// Help Modal Functions
function openHelpModal() {
    document.getElementById('help-modal').classList.remove('hidden');
}

function closeHelpModal() {
    document.getElementById('help-modal').classList.add('hidden');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('next-btn').addEventListener('click', () => {
        startRound();
    });
    
    document.getElementById('play-again-btn').addEventListener('click', () => {
        document.getElementById('end-screen').classList.add('hidden');
        initGame();
    });
    
    // Help modal event listeners
    document.getElementById('help-btn').addEventListener('click', openHelpModal);
    document.getElementById('help-close-btn').addEventListener('click', closeHelpModal);
    document.getElementById('help-got-it-btn').addEventListener('click', closeHelpModal);
    
    // Close modal when clicking outside content
    document.getElementById('help-modal').addEventListener('click', (e) => {
        if (e.target.id === 'help-modal') {
            closeHelpModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !document.getElementById('help-modal').classList.contains('hidden')) {
            closeHelpModal();
        }
    });
    
    initGame();
});
