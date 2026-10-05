/**
 * NEW Weaving It Together 3 (ม.6) - Curriculum & Exercise Dataset
 * สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & Cengage Learning / National Geographic Learning
 * CEF: B1/B2 Level | Version: v3.1.0-azure
 * Part 3: Word pills at top with full stop '.' on the final chunk
 * Unit 8: Poetic stanzas / couplets display
 */

const DEFAULT_EXERCISES = [
  {
    "id": 1,
    "title": "Yin-Yang: The Balance of Life",
    "thaiTitle": "หยิน-หยาง: สมดุลแห่งชีวิต",
    "cefr": "B1/B2",
    "unit": "Unit 1",
    "image": "assets/images/ex1.jpg",
    "audio": "assets/audio/ex1_yinyang.mp3",
    "passage": "Have you ever noticed how life is full of opposites—day and night, hot and cold, movement and rest? Ancient Chinese philosophers believed these opposite forces were not enemies but worked together to create balance. This idea became known as Yin-Yang and has influenced Chinese philosophy for thousands of years. Yin is connected with darkness, water, the moon, and stillness, while Yang represents light, fire, the sun, and activity. One cannot exist without the other.\n\nThe famous Yin-Yang symbol shows this relationship as a circle with two swirling black and white halves. Each half contains a small dot of the opposite color, showing that nothing is completely Yin or Yang. The concept has also influenced Traditional Chinese Medicine, where practitioners believe good health depends on maintaining harmony within the body. Yin-Yang ideas can also be found in Feng Shui and martial arts, where people try to balance different types of energy and movement.\n\nYin-Yang is not only an ancient philosophy—it can also teach us something about everyday life. We need both work and rest, excitement and calm, success and failure. Life is constantly changing, and learning to adapt to these changes can help us find balance. Yin-Yang reminds us that opposite experiences can complement each other and that a peaceful life does not mean avoiding difficulties, but learning how to live with both sides.",
    "paragraphs": [
      "Have you ever noticed how life is full of opposites—day and night, hot and cold, movement and rest? Ancient Chinese philosophers believed these opposite forces were not enemies but worked together to create balance. This idea became known as Yin-Yang and has influenced Chinese philosophy for thousands of years. Yin is connected with darkness, water, the moon, and stillness, while Yang represents light, fire, the sun, and activity. One cannot exist without the other.",
      "The famous Yin-Yang symbol shows this relationship as a circle with two swirling black and white halves. Each half contains a small dot of the opposite color, showing that nothing is completely Yin or Yang. The concept has also influenced Traditional Chinese Medicine, where practitioners believe good health depends on maintaining harmony within the body. Yin-Yang ideas can also be found in Feng Shui and martial arts, where people try to balance different types of energy and movement.",
      "Yin-Yang is not only an ancient philosophy—it can also teach us something about everyday life. We need both work and rest, excitement and calm, success and failure. Life is constantly changing, and learning to adapt to these changes can help us find balance. Yin-Yang reminds us that opposite experiences can complement each other and that a peaceful life does not mean avoiding difficulties, but learning how to live with both sides."
    ],
    "partA": [
      {
        "question": "What is the main idea behind Yin-Yang?",
        "options": [
          {
            "key": "a",
            "text": "Opposite forces can work together."
          },
          {
            "key": "b",
            "text": "Darkness is stronger than light."
          },
          {
            "key": "c",
            "text": "People should avoid change."
          }
        ],
        "answer": "a",
        "explanation": "Ancient Chinese philosophers believed opposite forces were not enemies but worked together to create balance.",
        "ref": "Paragraph Reference: Opposite forces can work together."
      },
      {
        "question": "What does Yang represent?",
        "options": [
          {
            "key": "a",
            "text": "Water and stillness"
          },
          {
            "key": "b",
            "text": "Light and activity"
          },
          {
            "key": "c",
            "text": "Darkness and the moon"
          }
        ],
        "answer": "b",
        "explanation": "Yang represents light, fire, the sun, and activity, while Yin represents darkness, water, moon, and stillness.",
        "ref": "Paragraph Reference: Light and activity"
      },
      {
        "question": "What do the small dots in the Yin-Yang symbol show?",
        "options": [
          {
            "key": "a",
            "text": "Yin and Yang must stay separate."
          },
          {
            "key": "b",
            "text": "One force is more powerful."
          },
          {
            "key": "c",
            "text": "Each side contains part of the other."
          }
        ],
        "answer": "c",
        "explanation": "Each half contains a small dot of the opposite color, showing that nothing is completely Yin or Yang.",
        "ref": "Paragraph Reference: Each side contains part of the other."
      },
      {
        "question": "How is Yin-Yang connected to Traditional Chinese Medicine?",
        "options": [
          {
            "key": "a",
            "text": "It focuses only on physical exercise."
          },
          {
            "key": "b",
            "text": "It teaches that good health requires balance."
          },
          {
            "key": "c",
            "text": "It is used to create new medicines."
          }
        ],
        "answer": "b",
        "explanation": "Practitioners believe good health depends on maintaining harmony within the body.",
        "ref": "Paragraph Reference: It teaches that good health requires balance."
      },
      {
        "question": "What lesson can Yin-Yang teach us about life?",
        "options": [
          {
            "key": "a",
            "text": "We should learn to adapt to change."
          },
          {
            "key": "b",
            "text": "Success is more important than failure."
          },
          {
            "key": "c",
            "text": "A peaceful life has no difficulties."
          }
        ],
        "answer": "a",
        "explanation": "Learning to adapt to changes can help us find balance and live with both positive and challenging sides.",
        "ref": "Paragraph Reference: We should learn to adapt to change."
      }
    ],
    "partB": {
      "wordBank": [
        "stillness",
        "balance",
        "adapt",
        "complement",
        "harmony"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Yin-Yang teaches that opposite forces can work together to create ",
          "suffix": ".",
          "answer": "balance"
        },
        {
          "id": 2,
          "prefix": "Yin is often connected with darkness, water, and ",
          "suffix": ".",
          "answer": "stillness"
        },
        {
          "id": 3,
          "prefix": "Traditional Chinese Medicine focuses on maintaining ",
          "suffix": " within the body.",
          "answer": "harmony"
        },
        {
          "id": 4,
          "prefix": "People need to ",
          "suffix": " when situations in life change.",
          "answer": "adapt"
        },
        {
          "id": 5,
          "prefix": "Opposite experiences can ",
          "suffix": " each other and create a complete whole.",
          "answer": "complement"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "represent / in life. / opposite forces / two / Yin and Yang",
        "tokens": [
          "Yin and Yang",
          "represent",
          "two",
          "opposite forces",
          "in life."
        ],
        "correct": "Yin and Yang represent two opposite forces in life."
      },
      {
        "id": 2,
        "prompt": "more peacefully. / can help / Finding / live / balance / us",
        "tokens": [
          "Finding",
          "balance",
          "can help",
          "us",
          "live",
          "more peacefully."
        ],
        "correct": "Finding balance can help us live more peacefully."
      },
      {
        "id": 3,
        "prompt": "Life / includes / both / positive / and difficult / experiences.",
        "tokens": [
          "Life",
          "includes",
          "both",
          "positive",
          "and difficult",
          "experiences."
        ],
        "correct": "Life includes both positive and difficult experiences."
      },
      {
        "id": 4,
        "prompt": "in Feng Shui / Yin-Yang ideas / and martial arts. / can be found",
        "tokens": [
          "Yin-Yang ideas",
          "can be found",
          "in Feng Shui",
          "and martial arts."
        ],
        "correct": "Yin-Yang ideas can be found in Feng Shui and martial arts."
      },
      {
        "id": 5,
        "prompt": "can work / in harmony. / Different energies / together",
        "tokens": [
          "Different energies",
          "can work",
          "together",
          "in harmony."
        ],
        "correct": "Different energies can work together in harmony."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "balance",
          "pos": "n.",
          "meaning": "ความสมดุล ความเที่ยงตรง"
        },
        {
          "word": "harmony",
          "pos": "n.",
          "meaning": "ความกลมกลืน ความสอดคล้อง"
        },
        {
          "word": "stillness",
          "pos": "n.",
          "meaning": "ความสงบนิ่ง ความเงียบสงบ"
        },
        {
          "word": "adapt",
          "pos": "v.",
          "meaning": "ปรับตัว ปรับเปลี่ยน"
        },
        {
          "word": "complement",
          "pos": "v.",
          "meaning": "เติมเต็ม เสริมซึ่งกันและกัน"
        }
      ],
      "keyVocab": [
        {
          "word": "balance",
          "pos": "n.",
          "meaning": "ความสมดุล ความเที่ยงตรง"
        },
        {
          "word": "harmony",
          "pos": "n.",
          "meaning": "ความกลมกลืน ความสอดคล้อง"
        },
        {
          "word": "stillness",
          "pos": "n.",
          "meaning": "ความสงบนิ่ง ความเงียบสงบ"
        },
        {
          "word": "adapt",
          "pos": "v.",
          "meaning": "ปรับตัว ปรับเปลี่ยน"
        },
        {
          "word": "complement",
          "pos": "v.",
          "meaning": "เติมเต็ม เสริมซึ่งกันและกัน"
        }
      ],
      "grammarTip": {
        "en": "Correlative Conjunctions: 'both ... and' joins two elements of equal grammatical weight (e.g. 'both positive and difficult experiences').",
        "th": "คำเชื่อมคู่ขนาน (Correlative Conjunctions): 'both ... and' ใช้เชื่อมสองสิ่งที่มีน้ำหนักทางไวยากรณ์เท่ากัน เช่น 'ทั้งงานและการพักผ่อน' (both work and rest)"
      }
    }
  },
  {
    "id": 2,
    "title": "Buffalo Racing Festival in Thailand",
    "thaiTitle": "ประเพณีวิ่งควาย: มรดกวัฒนธรรมอันทรงคุณค่าแห่งชลบุรี",
    "cefr": "B1/B2",
    "unit": "Unit 2",
    "image": "assets/images/ex2.jpg",
    "audio": "assets/audio/ex2_buffalo_racing.mp3",
    "passage": "Every year in Chonburi, Thailand, crowds gather to watch one of the country’s most unusual traditions—the Buffalo Racing Festival, or Wing Kwai. Celebrated for over 140 years, the festival usually takes place around the end of Buddhist Lent. It originally began as a way for farmers to show gratitude to their buffaloes for helping them work in the rice fields. Today, it has evolved into a lively cultural celebration that attracts thousands of visitors.\n\nThe most exciting part is the buffalo race, where skilled riders compete on a dirt track. Riding bareback and controlling the buffalo with only a rope requires excellent balance, strength, and technique. Since buffaloes can be unpredictable, the races are full of excitement and suspense. The festival also features a buffalo beauty contest, where farmers decorate their animals with colorful fabrics and accessories. Parades, traditional performances, music, and local food add to the festive atmosphere.\n\nMore than just entertainment, the festival has deep cultural significance. Buffaloes have played an important role in Thai agriculture, especially rice farming, for centuries. The festival celebrates the strong connection between farmers and their animals while helping younger generations understand the importance of preserving rural traditions. With its exciting races and colorful celebrations, Wing Kwai offers a unique look at Thailand’s history, culture, and rural life.",
    "paragraphs": [
      "Every year in Chonburi, Thailand, crowds gather to watch one of the country’s most unusual traditions—the Buffalo Racing Festival, or Wing Kwai. Celebrated for over 140 years, the festival usually takes place around the end of Buddhist Lent. It originally began as a way for farmers to show gratitude to their buffaloes for helping them work in the rice fields. Today, it has evolved into a lively cultural celebration that attracts thousands of visitors.",
      "The most exciting part is the buffalo race, where skilled riders compete on a dirt track. Riding bareback and controlling the buffalo with only a rope requires excellent balance, strength, and technique. Since buffaloes can be unpredictable, the races are full of excitement and suspense. The festival also features a buffalo beauty contest, where farmers decorate their animals with colorful fabrics and accessories. Parades, traditional performances, music, and local food add to the festive atmosphere.",
      "More than just entertainment, the festival has deep cultural significance. Buffaloes have played an important role in Thai agriculture, especially rice farming, for centuries. The festival celebrates the strong connection between farmers and their animals while helping younger generations understand the importance of preserving rural traditions. With its exciting races and colorful celebrations, Wing Kwai offers a unique look at Thailand’s history, culture, and rural life."
    ],
    "partA": [
      {
        "question": "Why was the Buffalo Racing Festival originally created?",
        "options": [
          {
            "key": "a",
            "text": "To celebrate the beginning of summer"
          },
          {
            "key": "b",
            "text": "To show gratitude to buffaloes"
          },
          {
            "key": "c",
            "text": "To attract tourists to Chonburi"
          }
        ],
        "answer": "b",
        "explanation": "It originally began as a way for farmers to show gratitude to their buffaloes for helping them work in the rice fields.",
        "ref": "Paragraph Reference: To show gratitude to buffaloes"
      },
      {
        "question": "What makes buffalo racing challenging for riders?",
        "options": [
          {
            "key": "a",
            "text": "Buffaloes can be unpredictable."
          },
          {
            "key": "b",
            "text": "The race takes several hours."
          },
          {
            "key": "c",
            "text": "Riders cannot see the track."
          }
        ],
        "answer": "a",
        "explanation": "Since buffaloes can be unpredictable, controlling them bareback requires great skill and balance.",
        "ref": "Paragraph Reference: Buffaloes can be unpredictable."
      },
      {
        "question": "What happens during the buffalo beauty contest?",
        "options": [
          {
            "key": "a",
            "text": "Buffaloes perform tricks."
          },
          {
            "key": "b",
            "text": "Farmers sell their buffaloes."
          },
          {
            "key": "c",
            "text": "Farmers decorate and display their buffaloes."
          }
        ],
        "answer": "c",
        "explanation": "Farmers decorate their animals with colorful fabrics and accessories for the beauty contest.",
        "ref": "Paragraph Reference: Farmers decorate and display their buffaloes."
      },
      {
        "question": "Why are buffaloes important in Thai history?",
        "options": [
          {
            "key": "a",
            "text": "They were mainly used for transportation."
          },
          {
            "key": "b",
            "text": "They played an important role in agriculture."
          },
          {
            "key": "c",
            "text": "They were kept only for festivals."
          }
        ],
        "answer": "b",
        "explanation": "Buffaloes have played an important role in Thai agriculture, especially rice farming, for centuries.",
        "ref": "Paragraph Reference: They played an important role in agriculture."
      },
      {
        "question": "What does the festival help younger generations understand?",
        "options": [
          {
            "key": "a",
            "text": "The importance of preserving rural traditions"
          },
          {
            "key": "b",
            "text": "How to become professional riders"
          },
          {
            "key": "c",
            "text": "How to organize sporting events"
          }
        ],
        "answer": "a",
        "explanation": "The festival helps younger generations understand the importance of preserving rural culture and traditions.",
        "ref": "Paragraph Reference: The importance of preserving rural traditions"
      }
    ],
    "partB": {
      "wordBank": [
        "significance",
        "preserving",
        "suspense",
        "atmosphere",
        "gratitude"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "The festival began as a way for farmers to show ",
          "suffix": " to their buffaloes.",
          "answer": "gratitude"
        },
        {
          "id": 2,
          "prefix": "The unpredictable races create excitement and ",
          "suffix": ".",
          "answer": "suspense"
        },
        {
          "id": 3,
          "prefix": "Music and performances create a lively ",
          "suffix": " at the festival.",
          "answer": "atmosphere"
        },
        {
          "id": 4,
          "prefix": "Buffaloes have great cultural ",
          "suffix": " in Thai farming communities.",
          "answer": "significance"
        },
        {
          "id": 5,
          "prefix": "The festival helps with ",
          "suffix": " traditional Thai culture.",
          "answer": "preserving"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "have relied on / Farmers / for agricultural work / buffaloes / for centuries.",
        "tokens": [
          "Farmers",
          "have relied on",
          "buffaloes",
          "for agricultural work",
          "for centuries."
        ],
        "correct": "Farmers have relied on buffaloes for agricultural work for centuries."
      },
      {
        "id": 2,
        "prompt": "many / The festival / each year. / attracts / spectators",
        "tokens": [
          "The festival",
          "attracts",
          "many",
          "spectators",
          "each year."
        ],
        "correct": "The festival attracts many spectators each year."
      },
      {
        "id": 3,
        "prompt": "create / environment. / Colorful / a festive / decorations",
        "tokens": [
          "Colorful",
          "decorations",
          "create",
          "a festive",
          "environment."
        ],
        "correct": "Colorful decorations create a festive environment."
      },
      {
        "id": 4,
        "prompt": "Thailand’s / The event / rural heritage. / celebrates",
        "tokens": [
          "The event",
          "celebrates",
          "Thailand’s",
          "rural heritage."
        ],
        "correct": "The event celebrates Thailand’s rural heritage."
      },
      {
        "id": 5,
        "prompt": "their culture. / work together / Local / to preserve / communities",
        "tokens": [
          "Local",
          "communities",
          "work together",
          "to preserve",
          "their culture."
        ],
        "correct": "Local communities work together to preserve their culture."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "gratitude",
          "pos": "n.",
          "meaning": "ความกตัญญู ความรู้สึกขอบคุณ"
        },
        {
          "word": "suspense",
          "pos": "n.",
          "meaning": "ความลุ้นระทึก ความตื่นเต้นใจจดใจจ่อ"
        },
        {
          "word": "significance",
          "pos": "n.",
          "meaning": "ความสำคัญ ความหมายลึกซึ้ง"
        },
        {
          "word": "preserve",
          "pos": "v.",
          "meaning": "อนุรักษ์ รักษาไว้ให้คงอยู่"
        },
        {
          "word": "atmosphere",
          "pos": "n.",
          "meaning": "บรรยากาศ สภาพแวดล้อมโดยรอบ"
        }
      ],
      "keyVocab": [
        {
          "word": "gratitude",
          "pos": "n.",
          "meaning": "ความกตัญญู ความรู้สึกขอบคุณ"
        },
        {
          "word": "suspense",
          "pos": "n.",
          "meaning": "ความลุ้นระทึก ความตื่นเต้นใจจดใจจ่อ"
        },
        {
          "word": "significance",
          "pos": "n.",
          "meaning": "ความสำคัญ ความหมายลึกซึ้ง"
        },
        {
          "word": "preserve",
          "pos": "v.",
          "meaning": "อนุรักษ์ รักษาไว้ให้คงอยู่"
        },
        {
          "word": "atmosphere",
          "pos": "n.",
          "meaning": "บรรยากาศ สภาพแวดล้อมโดยรอบ"
        }
      ],
      "grammarTip": {
        "en": "Present Perfect with 'for': 'have relied on ... for centuries' describes an action that began in the past and continues to the present.",
        "th": "Present Perfect ร่วมกับ 'for': 'have relied on ... for centuries' ใช้บรรยายสิ่งที่ชาวนาพึ่งพาควายตั้งแต่อดีตและยังคงดำเนินต่อเนื่องมาถึงปัจจุบัน"
      }
    }
  },
  {
    "id": 3,
    "title": "The Stars and Human Nature",
    "thaiTitle": "ดวงดาวและธรรมชาติของมนุษย์: โหราศาสตร์กับบุคลิกภาพ",
    "cefr": "B1/B2",
    "unit": "Unit 3",
    "image": "assets/images/ex3.jpg",
    "audio": "assets/audio/ex3_stars_human_nature.mp3",
    "passage": "For thousands of years, people have looked to the stars to understand personality and human behavior. Astrology began in ancient civilizations and later developed into the zodiac system we know today. It divides the twelve zodiac signs into four elements: fire, earth, air, and water. Although astrology is not considered a science today, many people still enjoy using it to explore personality traits and relationships.\n\nIn astrology, fire signs—Aries, Leo, and Sagittarius—are described as energetic, confident, and adventurous, while earth signs—Taurus, Virgo, and Capricorn—are considered practical, reliable, and hardworking. Air signs—Gemini, Libra, and Aquarius—are often associated with curiosity, communication, and creative thinking. Meanwhile, water signs—Cancer, Scorpio, and Pisces—are believed to be emotional, intuitive, and compassionate. Each group is thought to have its own strengths and weaknesses.\n\nAstrology is also commonly used to explore compatibility between people. Some believe certain zodiac signs naturally connect better than others, although there is no scientific evidence that star signs determine personality or relationships. Today, astrology remains popular through horoscopes, social media, and apps. For many people, its appeal may be less about predicting the future and more about reflecting on their personality and understanding how they connect with others.",
    "paragraphs": [
      "For thousands of years, people have looked to the stars to understand personality and human behavior. Astrology began in ancient civilizations and later developed into the zodiac system we know today. It divides the twelve zodiac signs into four elements: fire, earth, air, and water. Although astrology is not considered a science today, many people still enjoy using it to explore personality traits and relationships.",
      "In astrology, fire signs—Aries, Leo, and Sagittarius—are described as energetic, confident, and adventurous, while earth signs—Taurus, Virgo, and Capricorn—are considered practical, reliable, and hardworking. Air signs—Gemini, Libra, and Aquarius—are often associated with curiosity, communication, and creative thinking. Meanwhile, water signs—Cancer, Scorpio, and Pisces—are believed to be emotional, intuitive, and compassionate. Each group is thought to have its own strengths and weaknesses.",
      "Astrology is also commonly used to explore compatibility between people. Some believe certain zodiac signs naturally connect better than others, although there is no scientific evidence that star signs determine personality or relationships. Today, astrology remains popular through horoscopes, social media, and apps. For many people, its appeal may be less about predicting the future and more about reflecting on their personality and understanding how they connect with others."
    ],
    "partA": [
      {
        "question": "What is astrology often used to explore today?",
        "options": [
          {
            "key": "a",
            "text": "Weather patterns"
          },
          {
            "key": "b",
            "text": "Personality and relationships"
          },
          {
            "key": "c",
            "text": "Human health"
          }
        ],
        "answer": "b",
        "explanation": "Many people enjoy using astrology to explore personality traits and personal relationships.",
        "ref": "Paragraph Reference: Personality and relationships"
      },
      {
        "question": "Which signs are described as practical and reliable?",
        "options": [
          {
            "key": "a",
            "text": "Earth signs"
          },
          {
            "key": "b",
            "text": "Fire signs"
          },
          {
            "key": "c",
            "text": "Water signs"
          }
        ],
        "answer": "a",
        "explanation": "Earth signs—Taurus, Virgo, and Capricorn—are considered practical, reliable, and hardworking.",
        "ref": "Paragraph Reference: Earth signs"
      },
      {
        "question": "What qualities are associated with air signs?",
        "options": [
          {
            "key": "a",
            "text": "Strength and discipline"
          },
          {
            "key": "b",
            "text": "Emotion and compassion"
          },
          {
            "key": "c",
            "text": "Curiosity and communication"
          }
        ],
        "answer": "c",
        "explanation": "Air signs are often associated with curiosity, communication, and creative thinking.",
        "ref": "Paragraph Reference: Curiosity and communication"
      },
      {
        "question": "What does “compatibility” refer to in astrology?",
        "options": [
          {
            "key": "a",
            "text": "How well people may connect with each other"
          },
          {
            "key": "b",
            "text": "How people predict the weather"
          },
          {
            "key": "c",
            "text": "How zodiac signs were created"
          }
        ],
        "answer": "a",
        "explanation": "Compatibility refers to how well certain zodiac signs naturally connect with one another.",
        "ref": "Paragraph Reference: How well people may connect with each other"
      },
      {
        "question": "Why does astrology remain popular today?",
        "options": [
          {
            "key": "a",
            "text": "It has been scientifically proven."
          },
          {
            "key": "b",
            "text": "It can encourage people to reflect on themselves and relationships."
          },
          {
            "key": "c",
            "text": "It always predicts the future correctly."
          }
        ],
        "answer": "b",
        "explanation": "Its appeal is about reflecting on one's own personality and understanding social connections.",
        "ref": "Paragraph Reference: It can encourage people to reflect on themselves and relationships."
      }
    ],
    "partB": {
      "wordBank": [
        "intuitive",
        "compatibility",
        "reflecting",
        "traits",
        "Astrology"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "",
          "suffix": " uses zodiac signs to explore personality and relationships.",
          "answer": "Astrology"
        },
        {
          "id": 2,
          "prefix": "Different zodiac signs are associated with different personality ",
          "suffix": ".",
          "answer": "traits"
        },
        {
          "id": 3,
          "prefix": "Water signs are often described as emotional and ",
          "suffix": ".",
          "answer": "intuitive"
        },
        {
          "id": 4,
          "prefix": "Some people use zodiac signs to explore ",
          "suffix": " between partners.",
          "answer": "compatibility"
        },
        {
          "id": 5,
          "prefix": "Astrology can be a way of ",
          "suffix": " on our personalities and behavior.",
          "answer": "reflecting"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "are divided / into / Zodiac signs / four / elements. / different",
        "tokens": [
          "Zodiac signs",
          "are divided",
          "into",
          "four",
          "different",
          "elements."
        ],
        "correct": "Zodiac signs are divided into four different elements."
      },
      {
        "id": 2,
        "prompt": "and adventurous. / Fire signs / energetic / described as / are often",
        "tokens": [
          "Fire signs",
          "are often",
          "described as",
          "energetic",
          "and adventurous."
        ],
        "correct": "Fire signs are often described as energetic and adventurous."
      },
      {
        "id": 3,
        "prompt": "and reliable / are associated with / Earth signs / practical / personalities.",
        "tokens": [
          "Earth signs",
          "are associated with",
          "practical",
          "and reliable",
          "personalities."
        ],
        "correct": "Earth signs are associated with practical and reliable personalities."
      },
      {
        "id": 4,
        "prompt": "to enjoy / are believed / ideas / Air signs / and communication.",
        "tokens": [
          "Air signs",
          "are believed",
          "to enjoy",
          "ideas",
          "and communication."
        ],
        "correct": "Air signs are believed to enjoy ideas and communication."
      },
      {
        "id": 5,
        "prompt": "and apps. / remain / Horoscopes / popular on / social media",
        "tokens": [
          "Horoscopes",
          "remain",
          "popular on",
          "social media",
          "and apps."
        ],
        "correct": "Horoscopes remain popular on social media and apps."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "astrology",
          "pos": "n.",
          "meaning": "โหราศาสตร์ การดูดวงตามดวงดาว"
        },
        {
          "word": "trait",
          "pos": "n.",
          "meaning": "คุณลักษณะ ลักษณะนิสัยเฉพาะตัว"
        },
        {
          "word": "intuitive",
          "pos": "adj.",
          "meaning": "ที่ใช้สัญชาตญาณ รับรู้ได้อย่างลึกซึ้ง"
        },
        {
          "word": "compatibility",
          "pos": "n.",
          "meaning": "ความเข้ากันได้ ความกลมกลืนกัน"
        },
        {
          "word": "reflect",
          "pos": "v.",
          "meaning": "สะท้อนคิด ไตร่ตรองตนเอง"
        }
      ],
      "keyVocab": [
        {
          "word": "astrology",
          "pos": "n.",
          "meaning": "โหราศาสตร์ การดูดวงตามดวงดาว"
        },
        {
          "word": "trait",
          "pos": "n.",
          "meaning": "คุณลักษณะ ลักษณะนิสัยเฉพาะตัว"
        },
        {
          "word": "intuitive",
          "pos": "adj.",
          "meaning": "ที่ใช้สัญชาตญาณ รับรู้ได้อย่างลึกซึ้ง"
        },
        {
          "word": "compatibility",
          "pos": "n.",
          "meaning": "ความเข้ากันได้ ความกลมกลืนกัน"
        },
        {
          "word": "reflect",
          "pos": "v.",
          "meaning": "สะท้อนคิด ไตร่ตรองตนเอง"
        }
      ],
      "grammarTip": {
        "en": "Passive Voice with 'be + considered / believed': 'are considered practical' expresses general beliefs or evaluations without specifying the agent.",
        "th": "รูปประโยคกรรมวาจก (Passive Voice): 'are considered / are believed' ใช้แสดงการยอมรับหรือความเชื่อทั่วไป เช่น 'ได้รับการยอมรับว่าน่าเชื่อถือ' (are considered practical)"
      }
    }
  },
  {
    "id": 4,
    "title": "The Gorilla Whisperer",
    "thaiTitle": "ผู้สื่อสารกับกอริลลา: ไดแอน ฟอสซีย์กับการอนุรักษ์สัตว์ป่า",
    "cefr": "B1/B2",
    "unit": "Unit 4",
    "image": "assets/images/ex4.jpg",
    "audio": "assets/audio/ex4_gorilla_whisperer.mp3",
    "passage": "Dian Fossey was an American primatologist and conservationist who dedicated her life to studying mountain gorillas. Born in California in 1932, she loved animals from a young age. In the 1960s, she traveled to Africa and met anthropologist Louis Leakey, who encouraged her to study gorillas. In 1967, Fossey established the Karisoke Research Center in Rwanda. She spent years observing wild gorillas and slowly gained their trust by copying their movements and sounds.\n\nFossey’s research changed the way people viewed gorillas. Instead of being naturally aggressive, she discovered that they were gentle, social animals with strong family relationships. She observed how they communicated, played, and cared for one another. However, the gorillas faced a serious threat from illegal hunters. Fossey worked fiercely to protect them by removing traps and reporting illegal hunters. Her strong actions sometimes created conflicts, but she remained determined to protect the animals.\n\nIn 1983, Fossey published Gorillas in the Mist, which brought international attention to gorilla conservation. Sadly, she was murdered at her research center in 1985, and the case remains unsolved. Despite her death, her work created a lasting legacy. Conservation organizations continue to protect mountain gorillas and their habitats today. Fossey’s courage and dedication helped change our understanding of gorillas and continues to inspire people to protect wildlife.",
    "paragraphs": [
      "Dian Fossey was an American primatologist and conservationist who dedicated her life to studying mountain gorillas. Born in California in 1932, she loved animals from a young age. In the 1960s, she traveled to Africa and met anthropologist Louis Leakey, who encouraged her to study gorillas. In 1967, Fossey established the Karisoke Research Center in Rwanda. She spent years observing wild gorillas and slowly gained their trust by copying their movements and sounds.",
      "Fossey’s research changed the way people viewed gorillas. Instead of being naturally aggressive, she discovered that they were gentle, social animals with strong family relationships. She observed how they communicated, played, and cared for one another. However, the gorillas faced a serious threat from illegal hunters. Fossey worked fiercely to protect them by removing traps and reporting illegal hunters. Her strong actions sometimes created conflicts, but she remained determined to protect the animals.",
      "In 1983, Fossey published Gorillas in the Mist, which brought international attention to gorilla conservation. Sadly, she was murdered at her research center in 1985, and the case remains unsolved. Despite her death, her work created a lasting legacy. Conservation organizations continue to protect mountain gorillas and their habitats today. Fossey’s courage and dedication helped change our understanding of gorillas and continues to inspire people to protect wildlife."
    ],
    "partA": [
      {
        "question": "Who encouraged Dian Fossey to study gorillas?",
        "options": [
          {
            "key": "a",
            "text": "Louis Leakey"
          },
          {
            "key": "b",
            "text": "Jane Goodall"
          },
          {
            "key": "c",
            "text": "Sigourney Weaver"
          }
        ],
        "answer": "a",
        "explanation": "Anthropologist Louis Leakey encouraged her to study mountain gorillas in Africa.",
        "ref": "Paragraph Reference: Louis Leakey"
      },
      {
        "question": "How did Fossey gain the gorillas’ trust?",
        "options": [
          {
            "key": "a",
            "text": "By giving them food"
          },
          {
            "key": "b",
            "text": "By copying their movements and sounds"
          },
          {
            "key": "c",
            "text": "By keeping them at the research center"
          }
        ],
        "answer": "b",
        "explanation": "She spent years observing wild gorillas and slowly gained their trust by copying their movements and sounds.",
        "ref": "Paragraph Reference: By copying their movements and sounds"
      },
      {
        "question": "What did Fossey discover about gorillas?",
        "options": [
          {
            "key": "a",
            "text": "They prefer to live alone."
          },
          {
            "key": "b",
            "text": "They are naturally aggressive."
          },
          {
            "key": "c",
            "text": "They are gentle and social animals."
          }
        ],
        "answer": "c",
        "explanation": "Instead of being aggressive, she discovered they were gentle, social creatures with strong family bonds.",
        "ref": "Paragraph Reference: They are gentle and social animals."
      },
      {
        "question": "How did Fossey help protect the gorillas?",
        "options": [
          {
            "key": "a",
            "text": "She removed traps and reported illegal hunters."
          },
          {
            "key": "b",
            "text": "She moved the gorillas to another country."
          },
          {
            "key": "c",
            "text": "She kept the gorillas in a zoo."
          }
        ],
        "answer": "a",
        "explanation": "She removed snares and traps and reported illegal poachers to safeguard gorilla populations.",
        "ref": "Paragraph Reference: She removed traps and reported illegal hunters."
      },
      {
        "question": "Why was Gorillas in the Mist important?",
        "options": [
          {
            "key": "a",
            "text": "It taught people how to train gorillas."
          },
          {
            "key": "b",
            "text": "It brought attention to gorilla conservation."
          },
          {
            "key": "c",
            "text": "It explained how to become a scientist."
          }
        ],
        "answer": "b",
        "explanation": "Published in 1983, it brought widespread international awareness to gorilla conservation.",
        "ref": "Paragraph Reference: It brought attention to gorilla conservation."
      }
    ],
    "partB": {
      "wordBank": [
        "legacy",
        "determined",
        "conservation",
        "trust",
        "research"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Fossey spent many years doing ",
          "suffix": " on mountain gorillas.",
          "answer": "research"
        },
        {
          "id": 2,
          "prefix": "She slowly gained the gorillas’ ",
          "suffix": " by copying their movements and sounds.",
          "answer": "trust"
        },
        {
          "id": 3,
          "prefix": "Fossey was ",
          "suffix": " to protect gorillas from illegal hunters.",
          "answer": "determined"
        },
        {
          "id": 4,
          "prefix": "Her book helped bring attention to gorilla ",
          "suffix": ".",
          "answer": "conservation"
        },
        {
          "id": 5,
          "prefix": "Fossey left a lasting ",
          "suffix": " that continues to inspire people today.",
          "answer": "legacy"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "social animals. / Her / showed that / research / gorillas / are",
        "tokens": [
          "Her",
          "research",
          "showed that",
          "gorillas",
          "are",
          "social animals."
        ],
        "correct": "Her research showed that gorillas are social animals."
      },
      {
        "id": 2,
        "prompt": "wild animals / Illegal hunting / can put / serious danger. / in",
        "tokens": [
          "Illegal hunting",
          "can put",
          "wild animals",
          "in",
          "serious danger."
        ],
        "correct": "Illegal hunting can put wild animals in serious danger."
      },
      {
        "id": 3,
        "prompt": "to protect / their habitat. / She / worked hard / gorillas / and",
        "tokens": [
          "She",
          "worked hard",
          "to protect",
          "gorillas",
          "and",
          "their habitat."
        ],
        "correct": "She worked hard to protect gorillas and their habitat."
      },
      {
        "id": 4,
        "prompt": "is important for / Protecting natural habitats / survival. / wildlife",
        "tokens": [
          "Protecting natural habitats",
          "is important for",
          "wildlife",
          "survival."
        ],
        "correct": "Protecting natural habitats is important for wildlife survival."
      },
      {
        "id": 5,
        "prompt": "continues to / animal conservation / inspire / today. / Fossey’s work",
        "tokens": [
          "Fossey’s work",
          "continues to",
          "inspire",
          "animal conservation",
          "today."
        ],
        "correct": "Fossey’s work continues to inspire animal conservation today."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "conservation",
          "pos": "n.",
          "meaning": "การอนุรักษ์ทรัพยากรธรรมชาติและสัตว์ป่า"
        },
        {
          "word": "determined",
          "pos": "adj.",
          "meaning": "มุ่งมั่นอย่างเด็ดเดี่ยว ตั้งใจจริง"
        },
        {
          "word": "legacy",
          "pos": "n.",
          "meaning": "มรดกตกทอด สิ่งที่สืบทอดสู่คนรุ่นหลัง"
        },
        {
          "word": "trust",
          "pos": "n./v.",
          "meaning": "ความไว้วางใจ เชื่อมั่น"
        },
        {
          "word": "habitat",
          "pos": "n.",
          "meaning": "ถิ่นที่อยู่อาศัยตามธรรมชาติ"
        }
      ],
      "keyVocab": [
        {
          "word": "conservation",
          "pos": "n.",
          "meaning": "การอนุรักษ์ทรัพยากรธรรมชาติและสัตว์ป่า"
        },
        {
          "word": "determined",
          "pos": "adj.",
          "meaning": "มุ่งมั่นอย่างเด็ดเดี่ยว ตั้งใจจริง"
        },
        {
          "word": "legacy",
          "pos": "n.",
          "meaning": "มรดกตกทอด สิ่งที่สืบทอดสู่คนรุ่นหลัง"
        },
        {
          "word": "trust",
          "pos": "n./v.",
          "meaning": "ความไว้วางใจ เชื่อมั่น"
        },
        {
          "word": "habitat",
          "pos": "n.",
          "meaning": "ถิ่นที่อยู่อาศัยตามธรรมชาติ"
        }
      ],
      "grammarTip": {
        "en": "Infinitive of Purpose: 'worked hard to protect gorillas' uses 'to + verb' to express the reason or goal of an action.",
        "th": "Infinitive บอกจุดประสงค์: 'to protect gorillas' (เพื่อปกป้องกอริลลา) ใช้โครงสร้าง to + V.infinitive แสดงเป้าหมายของการทำงานอย่างทุ่มเท"
      }
    }
  },
  {
    "id": 5,
    "title": "Kimchi: The Spicy Soul of Korean Cuisine",
    "thaiTitle": "กิมจิ: จิตวิญญาณแห่งวัฒนธรรมอาหารเกาหลี",
    "cefr": "B1/B2",
    "unit": "Unit 5",
    "image": "assets/images/ex5.jpg",
    "audio": "assets/audio/ex5_kimchi.mp3",
    "passage": "Imagine opening a jar and being hit by a strong, spicy smell! Inside is kimchi, one of Korea’s most famous foods. Usually made from napa cabbage or radish mixed with chili pepper, garlic, and ginger, kimchi is known for its spicy, sour, and salty flavors. But kimchi was not originally created just for its taste. More than 1,500 years ago, Koreans began preserving vegetables with salt so they would have food during the cold winter. Over time, new ingredients were added, creating the colorful dish enjoyed today.\n\nThe secret behind kimchi’s unique taste is fermentation. After vegetables are salted and covered with seasoning, they are stored in containers and left to ferment. As time passes, the flavor becomes stronger and more sour. In the past, people buried large clay pots of kimchi underground to keep them cool. Another important tradition is kimjang, when families and communities gather to prepare large amounts of kimchi for winter. This tradition is so important that UNESCO recognized it as an Intangible Cultural Heritage in 2013.\n\nToday, kimchi is much more than a simple side dish. Koreans use it in fried rice, stews, pancakes, ramen, and many other meals. It also contains probiotics, which can support healthy digestion. Kimchi has become popular far beyond Korea, appearing in everything from tacos to burgers. Whether eaten fresh and crunchy or aged and sour, kimchi continues to connect food, family, and Korean culture across generations.",
    "paragraphs": [
      "Imagine opening a jar and being hit by a strong, spicy smell! Inside is kimchi, one of Korea’s most famous foods. Usually made from napa cabbage or radish mixed with chili pepper, garlic, and ginger, kimchi is known for its spicy, sour, and salty flavors. But kimchi was not originally created just for its taste. More than 1,500 years ago, Koreans began preserving vegetables with salt so they would have food during the cold winter. Over time, new ingredients were added, creating the colorful dish enjoyed today.",
      "The secret behind kimchi’s unique taste is fermentation. After vegetables are salted and covered with seasoning, they are stored in containers and left to ferment. As time passes, the flavor becomes stronger and more sour. In the past, people buried large clay pots of kimchi underground to keep them cool. Another important tradition is kimjang, when families and communities gather to prepare large amounts of kimchi for winter. This tradition is so important that UNESCO recognized it as an Intangible Cultural Heritage in 2013.",
      "Today, kimchi is much more than a simple side dish. Koreans use it in fried rice, stews, pancakes, ramen, and many other meals. It also contains probiotics, which can support healthy digestion. Kimchi has become popular far beyond Korea, appearing in everything from tacos to burgers. Whether eaten fresh and crunchy or aged and sour, kimchi continues to connect food, family, and Korean culture across generations."
    ],
    "partA": [
      {
        "question": "Why did Koreans originally preserve vegetables with salt?",
        "options": [
          {
            "key": "a",
            "text": "To make them more colorful"
          },
          {
            "key": "b",
            "text": "To have food during winter"
          },
          {
            "key": "c",
            "text": "To sell them to other countries"
          }
        ],
        "answer": "b",
        "explanation": "More than 1,500 years ago, Koreans preserved vegetables with salt so they would have food during the cold winter.",
        "ref": "Paragraph Reference: To have food during winter"
      },
      {
        "question": "What happens to kimchi during fermentation?",
        "options": [
          {
            "key": "a",
            "text": "Its flavor becomes stronger and more sour."
          },
          {
            "key": "b",
            "text": "It becomes sweeter and softer."
          },
          {
            "key": "c",
            "text": "It loses its flavor completely."
          }
        ],
        "answer": "a",
        "explanation": "During fermentation, as time passes, the flavor becomes stronger and more sour.",
        "ref": "Paragraph Reference: Its flavor becomes stronger and more sour."
      },
      {
        "question": "How was kimchi traditionally kept cool?",
        "options": [
          {
            "key": "a",
            "text": "It was stored in wooden boxes."
          },
          {
            "key": "b",
            "text": "It was placed near rivers."
          },
          {
            "key": "c",
            "text": "It was buried underground in clay pots."
          }
        ],
        "answer": "c",
        "explanation": "In the past, people buried large clay pots of kimchi underground to keep them cool.",
        "ref": "Paragraph Reference: It was buried underground in clay pots."
      },
      {
        "question": "What is kimjang?",
        "options": [
          {
            "key": "a",
            "text": "A traditional Korean soup"
          },
          {
            "key": "b",
            "text": "A tradition of making kimchi together"
          },
          {
            "key": "c",
            "text": "A type of Korean restaurant"
          }
        ],
        "answer": "b",
        "explanation": "Kimjang is the community and family tradition of gathering to prepare large amounts of kimchi for winter.",
        "ref": "Paragraph Reference: A tradition of making kimchi together"
      },
      {
        "question": "Why is kimchi more than just food in Korea?",
        "options": [
          {
            "key": "a",
            "text": "It is the most expensive Korean dish."
          },
          {
            "key": "b",
            "text": "It can only be prepared during winter."
          },
          {
            "key": "c",
            "text": "It connects food, family, and culture"
          }
        ],
        "answer": "c",
        "explanation": "Kimchi connects food, family ties, and Korean culture across generations.",
        "ref": "Paragraph Reference: It connects food, family, and culture"
      }
    ],
    "partB": {
      "wordBank": [
        "probiotics",
        "fermentation",
        "culture",
        "preserving",
        "seasoning"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "In the past, ",
          "suffix": " vegetables helped people keep food for winter.",
          "answer": "preserving"
        },
        {
          "id": 2,
          "prefix": "Garlic, ginger, and chili pepper are often used as ",
          "suffix": " for kimchi.",
          "answer": "seasoning"
        },
        {
          "id": 3,
          "prefix": "The process of ",
          "suffix": " gives kimchi its strong and sour flavor.",
          "answer": "fermentation"
        },
        {
          "id": 4,
          "prefix": "Kimchi contains ",
          "suffix": " that can support healthy digestion.",
          "answer": "probiotics"
        },
        {
          "id": 5,
          "prefix": "Kimchi is an important part of Korean food and ",
          "suffix": ".",
          "answer": "culture"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "is famous for / bold flavor / Kimchi / its / and strong smell.",
        "tokens": [
          "Kimchi",
          "is famous for",
          "its",
          "bold flavor",
          "and strong smell."
        ],
        "correct": "Kimchi is famous for its bold flavor and strong smell."
      },
      {
        "id": 2,
        "prompt": "vegetables / can help / Salt / preserve / a long time. / for",
        "tokens": [
          "Salt",
          "can help",
          "preserve",
          "vegetables",
          "for",
          "a long time."
        ],
        "correct": "Salt can help preserve vegetables for a long time."
      },
      {
        "id": 3,
        "prompt": "generations. / Korean families / kimchi / have made / for many",
        "tokens": [
          "Korean families",
          "have made",
          "kimchi",
          "for many",
          "generations."
        ],
        "correct": "Korean families have made kimchi for many generations."
      },
      {
        "id": 4,
        "prompt": "together. / Kimjang / and communities / brings / families",
        "tokens": [
          "Kimjang",
          "brings",
          "families",
          "and communities",
          "together."
        ],
        "correct": "Kimjang brings families and communities together."
      },
      {
        "id": 5,
        "prompt": "probiotics. / Some fermented foods / helpful / contain",
        "tokens": [
          "Some fermented foods",
          "contain",
          "helpful",
          "probiotics."
        ],
        "correct": "Some fermented foods contain helpful probiotics."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "fermentation",
          "pos": "n.",
          "meaning": "กระบวนการหมักบ่มทางชีวภาพ"
        },
        {
          "word": "preserve",
          "pos": "v.",
          "meaning": "ถนอมอาหาร รักษาให้อยู่ได้นาน"
        },
        {
          "word": "probiotics",
          "pos": "n.",
          "meaning": "จุลินทรีย์มีประโยชน์ต่อระบบย่อยอาหาร"
        },
        {
          "word": "seasoning",
          "pos": "n.",
          "meaning": "เครื่องปรุงรส เครื่องเทศ"
        },
        {
          "word": "intangible",
          "pos": "adj.",
          "meaning": "ที่จับต้องไม่ได้ (เช่น มรดกทางวัฒนธรรม)"
        }
      ],
      "keyVocab": [
        {
          "word": "fermentation",
          "pos": "n.",
          "meaning": "กระบวนการหมักบ่มทางชีวภาพ"
        },
        {
          "word": "preserve",
          "pos": "v.",
          "meaning": "ถนอมอาหาร รักษาให้อยู่ได้นาน"
        },
        {
          "word": "probiotics",
          "pos": "n.",
          "meaning": "จุลินทรีย์มีประโยชน์ต่อระบบย่อยอาหาร"
        },
        {
          "word": "seasoning",
          "pos": "n.",
          "meaning": "เครื่องปรุงรส เครื่องเทศ"
        },
        {
          "word": "intangible",
          "pos": "adj.",
          "meaning": "ที่จับต้องไม่ได้ (เช่น มรดกทางวัฒนธรรม)"
        }
      ],
      "grammarTip": {
        "en": "Adjective clauses with 'which': 'contains probiotics, which can support healthy digestion' adds non-defining descriptive detail.",
        "th": "อนุประโยคขยายความ (Non-defining Relative Clause): ใช้ ', which ...' เพื่อเสริมข้อมูลประโยชน์ของโพรไบโอติกส์โดยไม่ต้องเริ่มประโยคใหม่"
      }
    }
  },
  {
    "id": 6,
    "title": "What Would Happen If Everyone Spoke the Same Language?",
    "thaiTitle": "จะเกิดอะไรขึ้นหากทุกคนบนโลกพูดภาษาเดียวกัน?",
    "cefr": "B1/B2",
    "unit": "Unit 6",
    "image": "assets/images/ex6.jpg",
    "audio": "assets/audio/ex6_same_language.mp3",
    "passage": "Imagine traveling anywhere in the world and being able to speak to everyone you meet. No translation apps, no language barriers, and fewer misunderstandings! If everyone spoke the same language, international communication could become much easier. People could travel, study, work, and collaborate across countries without needing to learn another language. It might even create a stronger sense of global connection.\n\nHowever, having only one language could come at a cost. Language is closely connected to culture and identity. There are thousands of languages around the world, and each one carries unique stories, traditions, expressions, and knowledge. If smaller languages disappeared, some of this cultural heritage could be lost forever. People might also feel less connected to their families, communities, and cultural roots.\n\nA shared language could help people exchange information and work together on global problems such as climate change and poverty. However, losing linguistic diversity would make the world less culturally rich. Perhaps the best solution is not for everyone to speak only one language, but to find better ways to communicate while continuing to preserve different languages. After all, our different languages are part of what makes the world interesting.",
    "paragraphs": [
      "Imagine traveling anywhere in the world and being able to speak to everyone you meet. No translation apps, no language barriers, and fewer misunderstandings! If everyone spoke the same language, international communication could become much easier. People could travel, study, work, and collaborate across countries without needing to learn another language. It might even create a stronger sense of global connection.",
      "However, having only one language could come at a cost. Language is closely connected to culture and identity. There are thousands of languages around the world, and each one carries unique stories, traditions, expressions, and knowledge. If smaller languages disappeared, some of this cultural heritage could be lost forever. People might also feel less connected to their families, communities, and cultural roots.",
      "A shared language could help people exchange information and work together on global problems such as climate change and poverty. However, losing linguistic diversity would make the world less culturally rich. Perhaps the best solution is not for everyone to speak only one language, but to find better ways to communicate while continuing to preserve different languages. After all, our different languages are part of what makes the world interesting."
    ],
    "partA": [
      {
        "question": "What would be one benefit if everyone spoke the same language?",
        "options": [
          {
            "key": "a",
            "text": "People would travel less often."
          },
          {
            "key": "b",
            "text": "Countries would become smaller."
          },
          {
            "key": "c",
            "text": "International communication would become easier."
          }
        ],
        "answer": "c",
        "explanation": "International communication would become much easier without language barriers.",
        "ref": "Paragraph Reference: International communication would become easier."
      },
      {
        "question": "Why is language important to culture?",
        "options": [
          {
            "key": "a",
            "text": "It carries traditions, stories, and knowledge."
          },
          {
            "key": "b",
            "text": "It prevents people from traveling."
          },
          {
            "key": "c",
            "text": "It makes people work faster."
          }
        ],
        "answer": "a",
        "explanation": "Each language carries unique stories, traditions, expressions, and cultural knowledge.",
        "ref": "Paragraph Reference: It carries traditions, stories, and knowledge."
      },
      {
        "question": "What could happen if smaller languages disappeared?",
        "options": [
          {
            "key": "a",
            "text": "Travel would become more expensive."
          },
          {
            "key": "b",
            "text": "Some cultural heritage could be lost."
          },
          {
            "key": "c",
            "text": "Everyone would learn more languages."
          }
        ],
        "answer": "b",
        "explanation": "Valuable cultural heritage and unique perspectives could be lost forever.",
        "ref": "Paragraph Reference: Some cultural heritage could be lost."
      },
      {
        "question": "How could a shared language help with global problems?",
        "options": [
          {
            "key": "a",
            "text": "Countries would no longer need governments."
          },
          {
            "key": "b",
            "text": "It would stop climate change immediately."
          },
          {
            "key": "c",
            "text": "People could work together more easily."
          }
        ],
        "answer": "c",
        "explanation": "It could help people exchange information and collaborate on global crises like poverty and climate change.",
        "ref": "Paragraph Reference: People could work together more easily."
      },
      {
        "question": "What does the passage suggest as a better solution?",
        "options": [
          {
            "key": "a",
            "text": "Improve communication while preserving different languages."
          },
          {
            "key": "b",
            "text": "Choose one language for the whole world."
          },
          {
            "key": "c",
            "text": "Stop learning foreign languages."
          }
        ],
        "answer": "a",
        "explanation": "Finding better communication tools while preserving diverse linguistic heritage is the ideal balance.",
        "ref": "Paragraph Reference: Improve communication while preserving different languages."
      }
    ],
    "partB": {
      "wordBank": [
        "collaborate",
        "heritage",
        "preserve",
        "identity",
        "barriers"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Language is an important part of a person’s cultural ",
          "suffix": ".",
          "answer": "identity"
        },
        {
          "id": 2,
          "prefix": "Language ",
          "suffix": " can make communication between people difficult.",
          "answer": "barriers"
        },
        {
          "id": 3,
          "prefix": "People from different countries can ",
          "suffix": " to solve global problems.",
          "answer": "collaborate"
        },
        {
          "id": 4,
          "prefix": "Traditional languages are an important part of cultural ",
          "suffix": ".",
          "answer": "heritage"
        },
        {
          "id": 5,
          "prefix": "Communities can work together to ",
          "suffix": " endangered languages.",
          "answer": "preserve"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "the same language / could make / easier. / global communication / Speaking",
        "tokens": [
          "Speaking",
          "the same language",
          "could make",
          "global communication",
          "easier."
        ],
        "correct": "Speaking the same language could make global communication easier."
      },
      {
        "id": 2,
        "prompt": "in danger of / Some / are / disappearing. / languages",
        "tokens": [
          "Some",
          "languages",
          "are",
          "in danger of",
          "disappearing."
        ],
        "correct": "Some languages are in danger of disappearing."
      },
      {
        "id": 3,
        "prompt": "and knowledge. / Every language / unique / contains / traditions",
        "tokens": [
          "Every language",
          "contains",
          "unique",
          "traditions",
          "and knowledge."
        ],
        "correct": "Every language contains unique traditions and knowledge."
      },
      {
        "id": 4,
        "prompt": "the world’s / We / linguistic diversity. / should protect",
        "tokens": [
          "We",
          "should protect",
          "the world’s",
          "linguistic diversity."
        ],
        "correct": "We should protect the world’s linguistic diversity."
      },
      {
        "id": 5,
        "prompt": "can help / overcome / Technology / people / language barriers.",
        "tokens": [
          "Technology",
          "can help",
          "people",
          "overcome",
          "language barriers."
        ],
        "correct": "Technology can help people overcome language barriers."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "barrier",
          "pos": "n.",
          "meaning": "อุปสรรค สิ่งกีดขวางการสื่อสาร"
        },
        {
          "word": "collaborate",
          "pos": "v.",
          "meaning": "ร่วมมือกัน ทำงานร่วมกัน"
        },
        {
          "word": "diversity",
          "pos": "n.",
          "meaning": "ความหลากหลาย ความแตกต่างหลากรูปแบบ"
        },
        {
          "word": "heritage",
          "pos": "n.",
          "meaning": "มรดกตกทอด สิ่งล้ำค่าจากอดีต"
        },
        {
          "word": "identity",
          "pos": "n.",
          "meaning": "อัตลักษณ์ ความเป็นตัวตน"
        }
      ],
      "keyVocab": [
        {
          "word": "barrier",
          "pos": "n.",
          "meaning": "อุปสรรค สิ่งกีดขวางการสื่อสาร"
        },
        {
          "word": "collaborate",
          "pos": "v.",
          "meaning": "ร่วมมือกัน ทำงานร่วมกัน"
        },
        {
          "word": "diversity",
          "pos": "n.",
          "meaning": "ความหลากหลาย ความแตกต่างหลากรูปแบบ"
        },
        {
          "word": "heritage",
          "pos": "n.",
          "meaning": "มรดกตกทอด สิ่งล้ำค่าจากอดีต"
        },
        {
          "word": "identity",
          "pos": "n.",
          "meaning": "อัตลักษณ์ ความเป็นตัวตน"
        }
      ],
      "grammarTip": {
        "en": "Second Conditional: 'If everyone spoke the same language, international communication could become much easier' (Hypothetical condition: If + Past Simple, could / would + Base Verb).",
        "th": "ประโยคเงื่อนไขแบบที่ 2 (สมมุติสิ่งที่ไม่เป็นจริงในปัจจุบัน): 'If + V.2, could/would + V.infinitive' เช่น 'หากทุกคนพูดภาษาเดียวกัน การสื่อสารก็จะง่ายขึ้นมาก'"
      }
    }
  },
  {
    "id": 7,
    "title": "The Ocean’s Silent Killer",
    "thaiTitle": "ฆาตกรเงียบแห่งท้องทะเล: มลพิษพลาสติกกับวิกฤตสิ่งแวดล้อม",
    "cefr": "B1/B2",
    "unit": "Unit 7",
    "image": "assets/images/ex7.jpg",
    "audio": "assets/audio/ex7_oceans_silent_killer.mp3",
    "passage": "Every year, millions of tons of plastic enter our oceans, creating a serious threat to marine life. Plastic bags, bottles, food packaging, and abandoned fishing gear can remain in the environment for many years. Sea turtles may mistake plastic bags for jellyfish, while fish and seabirds can accidentally swallow smaller pieces. Eating plastic can block their digestive systems and may lead to starvation or death.\n\nAnother major danger comes from abandoned fishing nets, often called ghost nets. Dolphins, sharks, turtles, and other animals can become trapped in these nets, causing injuries or making it difficult for them to swim. Even smaller pieces of plastic can be dangerous. Microplastics—tiny plastic particles smaller than 5 millimeters—can enter the food chain when they are eaten by plankton and small fish. Larger animals then eat these creatures, allowing microplastics to move through the marine food chain and potentially reach humans.\n\nReducing plastic pollution requires action from everyone. Individuals can use reusable bags and bottles, avoid single-use plastics, and recycle whenever possible. Education, beach clean-ups, and environmental campaigns can also raise awareness about the problem. By changing our habits and working together, we can reduce plastic waste and protect the ocean for future generations.",
    "paragraphs": [
      "Every year, millions of tons of plastic enter our oceans, creating a serious threat to marine life. Plastic bags, bottles, food packaging, and abandoned fishing gear can remain in the environment for many years. Sea turtles may mistake plastic bags for jellyfish, while fish and seabirds can accidentally swallow smaller pieces. Eating plastic can block their digestive systems and may lead to starvation or death.",
      "Another major danger comes from abandoned fishing nets, often called ghost nets. Dolphins, sharks, turtles, and other animals can become trapped in these nets, causing injuries or making it difficult for them to swim. Even smaller pieces of plastic can be dangerous. Microplastics—tiny plastic particles smaller than 5 millimeters—can enter the food chain when they are eaten by plankton and small fish. Larger animals then eat these creatures, allowing microplastics to move through the marine food chain and potentially reach humans.",
      "Reducing plastic pollution requires action from everyone. Individuals can use reusable bags and bottles, avoid single-use plastics, and recycle whenever possible. Education, beach clean-ups, and environmental campaigns can also raise awareness about the problem. By changing our habits and working together, we can reduce plastic waste and protect the ocean for future generations."
    ],
    "partA": [
      {
        "question": "Why do some sea turtles eat plastic bags?",
        "options": [
          {
            "key": "a",
            "text": "They use them to build homes."
          },
          {
            "key": "b",
            "text": "They mistake them for jellyfish."
          },
          {
            "key": "c",
            "text": "They like the smell of plastic."
          }
        ],
        "answer": "b",
        "explanation": "Sea turtles mistake translucent floating plastic bags for jellyfish, which is their natural food.",
        "ref": "Paragraph Reference: They mistake them for jellyfish."
      },
      {
        "question": "What are “ghost nets”?",
        "options": [
          {
            "key": "a",
            "text": "Abandoned fishing nets"
          },
          {
            "key": "b",
            "text": "Nets used to clean beaches"
          },
          {
            "key": "c",
            "text": "Special nets used by scientists"
          }
        ],
        "answer": "a",
        "explanation": "Ghost nets are abandoned or lost fishing nets that continue to trap marine animals.",
        "ref": "Paragraph Reference: Abandoned fishing nets"
      },
      {
        "question": "How can microplastics enter the food chain?",
        "options": [
          {
            "key": "a",
            "text": "They disappear into the water."
          },
          {
            "key": "b",
            "text": "They are collected by fishermen."
          },
          {
            "key": "c",
            "text": "Plankton and small fish eat them."
          }
        ],
        "answer": "c",
        "explanation": "Plankton and small fish ingest tiny microplastics, passing them upward through the food web.",
        "ref": "Paragraph Reference: Plankton and small fish eat them."
      },
      {
        "question": "What can individuals do to reduce plastic pollution?",
        "options": [
          {
            "key": "a",
            "text": "Use more plastic packaging."
          },
          {
            "key": "b",
            "text": "Use reusable bags and bottles."
          },
          {
            "key": "c",
            "text": "Throw plastic into the ocean."
          }
        ],
        "answer": "b",
        "explanation": "Using reusable bags and water bottles eliminates single-use plastic waste.",
        "ref": "Paragraph Reference: Use reusable bags and bottles."
      },
      {
        "question": "What is the main message of the passage?",
        "options": [
          {
            "key": "a",
            "text": "People must work together to reduce plastic pollution."
          },
          {
            "key": "b",
            "text": "Plastic pollution only affects sea animals."
          },
          {
            "key": "c",
            "text": "Recycling is the only way to protect the ocean."
          }
        ],
        "answer": "a",
        "explanation": "Collective action, awareness, and lifestyle changes are urgently needed to protect our oceans.",
        "ref": "Paragraph Reference: People must work together to reduce plastic pollution."
      }
    ],
    "partB": {
      "wordBank": [
        "microplastics",
        "pollution",
        "awareness",
        "trapped",
        "reusable"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "Plastic ",
          "suffix": " is a serious threat to marine life.",
          "answer": "pollution"
        },
        {
          "id": 2,
          "prefix": "Marine animals can become ",
          "suffix": " in abandoned fishing nets.",
          "answer": "trapped"
        },
        {
          "id": 3,
          "prefix": "",
          "suffix": " are tiny pieces of plastic that can enter the food chain.",
          "answer": "microplastics"
        },
        {
          "id": 4,
          "prefix": "Using ",
          "suffix": " bags and bottles can help reduce plastic waste.",
          "answer": "reusable"
        },
        {
          "id": 5,
          "prefix": "Environmental campaigns can raise ",
          "suffix": " about ocean problems.",
          "answer": "awareness"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "marine animals. / Plastic waste / can / seriously harm",
        "tokens": [
          "Plastic waste",
          "can",
          "seriously harm",
          "marine animals."
        ],
        "correct": "Plastic waste can seriously harm marine animals."
      },
      {
        "id": 2,
        "prompt": "can trap / Abandoned / and turtles. / dolphins / fishing nets",
        "tokens": [
          "Abandoned",
          "fishing nets",
          "can trap",
          "dolphins",
          "and turtles."
        ],
        "correct": "Abandoned fishing nets can trap dolphins and turtles."
      },
      {
        "id": 3,
        "prompt": "food chain. / Microplastics / the marine / can enter",
        "tokens": [
          "Microplastics",
          "can enter",
          "the marine",
          "food chain."
        ],
        "correct": "Microplastics can enter the marine food chain."
      },
      {
        "id": 4,
        "prompt": "can reduce / Using / plastic waste. / reusable / products",
        "tokens": [
          "Using",
          "reusable",
          "products",
          "can reduce",
          "plastic waste."
        ],
        "correct": "Using reusable products can reduce plastic waste."
      },
      {
        "id": 5,
        "prompt": "can make / our daily habits / Small changes / a difference. / in",
        "tokens": [
          "Small changes",
          "in",
          "our daily habits",
          "can make",
          "a difference."
        ],
        "correct": "Small changes in our daily habits can make a difference."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "pollution",
          "pos": "n.",
          "meaning": "มลพิษ สิ่งปนเปื้อนในสิ่งแวดล้อม"
        },
        {
          "word": "microplastics",
          "pos": "n.",
          "meaning": "อนุภาคพลาสติกขนาดเล็กกว่า 5 มิลลิเมตร"
        },
        {
          "word": "reusable",
          "pos": "adj.",
          "meaning": "ที่สามารถนำกลับมาใช้ซ้ำได้หลายครั้ง"
        },
        {
          "word": "awareness",
          "pos": "n.",
          "meaning": "ความตระหนัก การตื่นรู้ทางความคิด"
        },
        {
          "word": "starvation",
          "pos": "n.",
          "meaning": "ความอดอยาก การขาดสารอาหารจนเสียชีวิต"
        }
      ],
      "keyVocab": [
        {
          "word": "pollution",
          "pos": "n.",
          "meaning": "มลพิษ สิ่งปนเปื้อนในสิ่งแวดล้อม"
        },
        {
          "word": "microplastics",
          "pos": "n.",
          "meaning": "อนุภาคพลาสติกขนาดเล็กกว่า 5 มิลลิเมตร"
        },
        {
          "word": "reusable",
          "pos": "adj.",
          "meaning": "ที่สามารถนำกลับมาใช้ซ้ำได้หลายครั้ง"
        },
        {
          "word": "awareness",
          "pos": "n.",
          "meaning": "ความตระหนัก การตื่นรู้ทางความคิด"
        },
        {
          "word": "starvation",
          "pos": "n.",
          "meaning": "ความอดอยาก การขาดสารอาหารจนเสียชีวิต"
        }
      ],
      "grammarTip": {
        "en": "Gerund as Subject: 'Reducing plastic pollution requires action from everyone' uses a gerund ('Reducing...') as the singular subject of the sentence.",
        "th": "กริยานามเป็นประธาน (Gerund as Subject): 'Reducing plastic pollution' (การลดมลพิษพลาสติก) ทำหน้าที่เป็นประธานเอกพจน์ กริยาจึงเติม s ('requires')"
      }
    }
  },
  {
    "id": 8,
    "title": "The Fox and the Grapes",
    "thaiTitle": "สุนัขจิ้งจอกกับพวงองุ่น: นิทานอีสปสอนใจ",
    "cefr": "B1/B2",
    "unit": "Unit 8",
    "image": "assets/images/ex8.jpg",
    "audio": "assets/audio/ex8_fox_and_grapes.mp3",
    "passage": "A hungry fox walked through the heat,\nSearching everywhere for something sweet.\n\nHe saw some grapes upon a vine,\nHanging high and looking fine.\n\nHe jumped and stretched with all his might,\nBut every try just wasn’t right.\n\nAgain he jumped, again he tried,\nBut still the grapes stayed far too high.\n\nAt last he stopped and walked away,\n“Those grapes are sour anyway!”\n\nHe acted like he did not care,\nBecause the grapes were unreachable there.\n\nThe story teaches us that when we fail,\nWe sometimes change the way we tell the tale.\n\nInstead of admitting we could not succeed,\nWe may dislike what we cannot achieve.",
    "paragraphs": [
      "A hungry fox walked through the heat,\nSearching everywhere for something sweet.",
      "He saw some grapes upon a vine,\nHanging high and looking fine.",
      "He jumped and stretched with all his might,\nBut every try just wasn’t right.",
      "Again he jumped, again he tried,\nBut still the grapes stayed far too high.",
      "At last he stopped and walked away,\n“Those grapes are sour anyway!”",
      "He acted like he did not care,\nBecause the grapes were unreachable there.",
      "The story teaches us that when we fail,\nWe sometimes change the way we tell the tale.",
      "Instead of admitting we could not succeed,\nWe may dislike what we cannot achieve."
    ],
    "partA": [
      {
        "question": "What did the fox see hanging from the vine?",
        "options": [
          {
            "key": "a",
            "text": "Berries"
          },
          {
            "key": "b",
            "text": "Apples"
          },
          {
            "key": "c",
            "text": "Grapes"
          }
        ],
        "answer": "c",
        "explanation": "He saw some juicy grapes hanging high upon a grapevine.",
        "ref": "Paragraph Reference: Grapes"
      },
      {
        "question": "Why couldn’t the fox get the grapes?",
        "options": [
          {
            "key": "a",
            "text": "They were too high."
          },
          {
            "key": "b",
            "text": "They were not ripe."
          },
          {
            "key": "c",
            "text": "They were too small."
          }
        ],
        "answer": "a",
        "explanation": "Even though he jumped and stretched, the grapes were far too high for him to reach.",
        "ref": "Paragraph Reference: They were too high."
      },
      {
        "question": "What did the fox do after several failed attempts?",
        "options": [
          {
            "key": "a",
            "text": "He climbed the vine."
          },
          {
            "key": "b",
            "text": "He walked away."
          },
          {
            "key": "c",
            "text": "He asked for help."
          }
        ],
        "answer": "b",
        "explanation": "At last he gave up, stopped jumping, and walked away pretending he didn't care.",
        "ref": "Paragraph Reference: He walked away."
      },
      {
        "question": "What did the fox say about the grapes?",
        "options": [
          {
            "key": "a",
            "text": "They were expensive."
          },
          {
            "key": "b",
            "text": "They were delicious."
          },
          {
            "key": "c",
            "text": "They were sour."
          }
        ],
        "answer": "c",
        "explanation": "He excused his failure by claiming, 'Those grapes are sour anyway!'",
        "ref": "Paragraph Reference: They were sour."
      },
      {
        "question": "What is the main lesson of the story?",
        "options": [
          {
            "key": "a",
            "text": "Hard work always leads to success."
          },
          {
            "key": "b",
            "text": "People sometimes dislike what they cannot have."
          },
          {
            "key": "c",
            "text": "We should always share what we have."
          }
        ],
        "answer": "b",
        "explanation": "When people fail to achieve something, they often pretend to dislike it to protect their ego.",
        "ref": "Paragraph Reference: People sometimes dislike what they cannot have."
      }
    ],
    "partB": {
      "wordBank": [
        "succeed",
        "sour",
        "achieve",
        "vine",
        "unreachable"
      ],
      "questions": [
        {
          "id": 1,
          "prefix": "The fox saw some grapes hanging from a ",
          "suffix": ".",
          "answer": "vine"
        },
        {
          "id": 2,
          "prefix": "The grapes were too high and ",
          "suffix": " for the fox.",
          "answer": "unreachable"
        },
        {
          "id": 3,
          "prefix": "The fox said that the grapes were ",
          "suffix": " after he failed to get them.",
          "answer": "sour"
        },
        {
          "id": 4,
          "prefix": "Sometimes people do not want to admit that they could not ",
          "suffix": ".",
          "answer": "succeed"
        },
        {
          "id": 5,
          "prefix": "We may pretend something is not important when we cannot ",
          "suffix": " it.",
          "answer": "achieve"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "prompt": "noticed / some grapes / The fox / the ground. / high above / hanging",
        "tokens": [
          "The fox",
          "noticed",
          "some grapes",
          "hanging",
          "high above",
          "the ground."
        ],
        "correct": "The fox noticed some grapes hanging high above the ground."
      },
      {
        "id": 2,
        "prompt": "to reach / The fox / attempts / them. / several / made",
        "tokens": [
          "The fox",
          "made",
          "several",
          "attempts",
          "to reach",
          "them."
        ],
        "correct": "The fox made several attempts to reach them."
      },
      {
        "id": 3,
        "prompt": "had failed. / The fox / to admit / refused / he / that",
        "tokens": [
          "The fox",
          "refused",
          "to admit",
          "that",
          "he",
          "had failed."
        ],
        "correct": "The fox refused to admit that he had failed."
      },
      {
        "id": 4,
        "prompt": "disappointment. / People / make / to avoid / excuses / sometimes",
        "tokens": [
          "People",
          "sometimes",
          "make",
          "excuses",
          "to avoid",
          "disappointment."
        ],
        "correct": "People sometimes make excuses to avoid disappointment."
      },
      {
        "id": 5,
        "prompt": "to be honest / The story / us / teaches / our failures. / about",
        "tokens": [
          "The story",
          "teaches",
          "us",
          "to be honest",
          "about",
          "our failures."
        ],
        "correct": "The story teaches us to be honest about our failures."
      }
    ],
    "review": {
      "vocab": [
        {
          "word": "achieve",
          "pos": "v.",
          "meaning": "บรรลุเป้าหมาย ทำได้สำเร็จ"
        },
        {
          "word": "unreachable",
          "pos": "adj.",
          "meaning": "ที่เอื้อมไม่ถึง เกินความสามารถจะคว้ามาได้"
        },
        {
          "word": "sour",
          "pos": "adj.",
          "meaning": "เปรี้ยว (องุ่นเปรี้ยว)"
        },
        {
          "word": "succeed",
          "pos": "v.",
          "meaning": "ประสบความสำเร็จ สัมฤทธิผล"
        },
        {
          "word": "vine",
          "pos": "n.",
          "meaning": "เถาไม้เลื้อย เถาองุ่น"
        }
      ],
      "keyVocab": [
        {
          "word": "achieve",
          "pos": "v.",
          "meaning": "บรรลุเป้าหมาย ทำได้สำเร็จ"
        },
        {
          "word": "unreachable",
          "pos": "adj.",
          "meaning": "ที่เอื้อมไม่ถึง เกินความสามารถจะคว้ามาได้"
        },
        {
          "word": "sour",
          "pos": "adj.",
          "meaning": "เปรี้ยว (องุ่นเปรี้ยว)"
        },
        {
          "word": "succeed",
          "pos": "v.",
          "meaning": "ประสบความสำเร็จ สัมฤทธิผล"
        },
        {
          "word": "vine",
          "pos": "n.",
          "meaning": "เถาไม้เลื้อย เถาองุ่น"
        }
      ],
      "grammarTip": {
        "en": "Preposition 'Instead of' + Gerund: 'Instead of admitting we could not succeed' ('Instead of + V.ing' shows substitution or alternative action).",
        "th": "บุพบท 'Instead of' + Gerund: โครงสร้าง 'Instead of + V.ing' หมายถึง 'แทนที่จะ...' เช่น แทนที่จะยอมรับความล้มเหลว (Instead of admitting...)"
      }
    },
    "isPoem": true
  }
];

if (typeof window !== 'undefined') {
  window.DEFAULT_EXERCISES = DEFAULT_EXERCISES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_EXERCISES };
}
