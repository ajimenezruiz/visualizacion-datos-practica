

const loader = new THREE.TextureLoader();
const countryNames = {
  'AT': 'Austria',
  'BE': 'Belgium',
  'BG': 'Bulgaria',
  'CZ': 'Czech Republic',
  'DE': 'Germany',
  'EE': 'Estonia',
  'EL': 'Greece',
  'ES': 'Spain',
  'FI': 'Finland',
  'FR': 'France',
  'HU': 'Hungary',
  'IE': 'Ireland',
  'IT': 'Italy',
  'LV': 'Latvia',
  'NL': 'Netherlands',
  'PL': 'Poland',
  'PT': 'Portugal',
  'SI': 'Slovenia',
  'TR': 'Turkey',
  'UK': 'United Kingdom',
  'RO': 'Romania',
  'SK': 'Slovakia',
  'LT': 'Lithuania',
  'LU': 'Luxembourg',
  'SE': 'Sweden',
  'DK': 'Denmark',
  'HR': 'Croatia',
  'MK': 'North Macedonia',
  'MT': 'Malta',
  'RS': 'Serbia',
  'CY': 'Cyprus',
  'NO': 'Norway',
  'BA': 'Bosnia and Herzegovina',
  'ME': 'Montenegro'
};

var countryCoordinates = {
  "AT": {
      "x": 33.936573527338965,
      "y": 117.04501519024087
  },
  "BE": {
    "x": -28.489599088593863,
    "y": 140.4067115204329
},
  "BG": {
      "x": 113.47061400919775,
      "y": 82.07214372907326
  },
  "CZ": {
      "x": 42.745531785947264,
      "y": 136.16783309348173
  },
  "DE": {
      "x": 9.898415489107162,
      "y": 145.82140289150863
  },
  "EE": {
      "x": 108.98097876347482,
      "y": 202.97136103059506
  },
  "EL": {
      "x": 88.1445104934671,
      "y": 55.28619415783802
  },
  "ES": {
      "x": -70.19585700111804,
      "y": 59.375399204911105
  },
  "FI": {
      "x": 92.21492441653606,
      "y": 240.40834892776576
  },
  "FR": {
      "x": -31.78881086197708,
      "y": 111.60336919230355
  },
  "HU": {
      "x": 75.206351705267,
      "y": 116.52917189245682
  },
  "IE": {
      "x": -89.9445065586618,
      "y": 162.23877238576577
  },
  "IT": {
      "x": 35.156354739934585,
      "y": 71.8726415082144
  },
  "LV": {
      "x": 98.10896254348833,
      "y": 188.17935621586614
  },
  "NL": {
      "x": -18.034938569217324,
      "y": 154.5028620997861
  },
  "PL": {
      "x": 66.78205546646502,
      "y": 153.9489399961248
  },
  "PT": {
      "x": -96.5920507915785,
      "y": 56.05526148235764
  },
  "SI": {
      "x": 58.311258980415786,
      "y": 104.24350409873561
  },
  "TR": {
      "x": 158.8789776708461,
      "y": 51.573102200462365
  },
  "UK": {
      "x": -62.11937056006434,
      "y": 159.06748953607274
  },
  "RO": {
      "x": 109.53591862009316,
      "y": 103.40640562062453
  },
  "SK": {
      "x": 66.76384598930665,
      "y": 128.38267619060588
  },
  "LT": {
      "x": 87.31172119402146,
      "y": 177.24050491948395
  },
  "LU": {
      "x": -4.808453035925782,
      "y": 122.81314220223582
  },
  "SE": {
      "x": 33.82864123240401,
      "y": 222.27183591315242
  },
  "DK": {
    "x": -0.200989343255001,
    "y": 183.87728290234503
},
  "HR": {
      "x": 46.20337225376361,
      "y": 93.9928332968354
  },
  "MK": {
      "x": 88.05717333625576,
      "y": 72.60100075912725
  },
  "MT": {
    "x": 51.567984809233216,
    "y": 25.537231023157872
},
"RS": {
    "x": 69.20985444765037,
    "y": 97.76701470686726
},
  "CY": {
      "x": 113.97072965569794,
      "y": 22.41358458172776
  },
  "NO": {
    "x": 2.7639843377507374,
    "y": 206.617380111518
},
  "BA": {
    "x": 69.49169064176773,
    "y": 69.98120077707556
},
  "ME": {
    "x": 61.43659134012368,
    "y": 81.20274243030818
}
}

var flagTextures = {
    'AT': loader.load('https://flagcdn.com/w320/at.png'),
    'BE': loader.load('https://flagcdn.com/w320/be.png'),
    'BG': loader.load('https://flagcdn.com/w320/bg.png'),
    'CZ': loader.load('https://flagcdn.com/w320/cz.png'),
    'DE': loader.load('https://flagcdn.com/w320/de.png'),
    'EE': loader.load('https://flagcdn.com/w320/ee.png'),
    'EL': loader.load('https://flagcdn.com/w320/gr.png'), // EL is Greece (GR)
    'ES': loader.load('https://flagcdn.com/w320/es.png'),
    'FI': loader.load('https://flagcdn.com/w320/fi.png'),
    'FR': loader.load('https://flagcdn.com/w320/fr.png'),
    'HU': loader.load('https://flagcdn.com/w320/hu.png'),
    'IE': loader.load('https://flagcdn.com/w320/ie.png'),
    'IT': loader.load('https://flagcdn.com/w320/it.png'),
    'LV': loader.load('https://flagcdn.com/w320/lv.png'),
    'NL': loader.load('https://flagcdn.com/w320/nl.png'),
    'PL': loader.load('https://flagcdn.com/w320/pl.png'),
    'PT': loader.load('https://flagcdn.com/w320/pt.png'),
    'SI': loader.load('https://flagcdn.com/w320/si.png'),
    'TR': loader.load('https://flagcdn.com/w320/tr.png'),
    'UK': loader.load('https://flagcdn.com/w320/gb.png'), // UK is Great Britain (GB)
    'RO': loader.load('https://flagcdn.com/w320/ro.png'),
    'SK': loader.load('https://flagcdn.com/w320/sk.png'),
    'LT': loader.load('https://flagcdn.com/w320/lt.png'),
    'LU': loader.load('https://flagcdn.com/w320/lu.png'),
    'SE': loader.load('https://flagcdn.com/w320/se.png'),
    'DK': loader.load('https://flagcdn.com/w320/dk.png'),
    'HR': loader.load('https://flagcdn.com/w320/hr.png'),
    'MK': loader.load('https://flagcdn.com/w320/mk.png'),
    'MT': loader.load('https://flagcdn.com/w320/mt.png'),
    'RS': loader.load('https://flagcdn.com/w320/rs.png'),
    'CY': loader.load('https://flagcdn.com/w320/cy.png'),
    'NO': loader.load('https://flagcdn.com/w320/no.png'),
    'BA': loader.load('https://flagcdn.com/w320/ba.png'),
    'ME': loader.load('https://flagcdn.com/w320/me.png')
};

const hhcDescriptions = {
  'HHC_21': 'Single adult with children',
  'HHC_22': 'Single adult without children',
  'HHC_31': 'Adult living in a couple with children',
  'HHC_32': 'Adult living in a couple without children',
  'HHC_41': 'Adult living in another type of household with children',
  'HHC_42': 'Adult living in another type of household without children'
};

