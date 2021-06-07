from app.models import db, Language


# Adds a demo user, you can add other users here if you want
def seed_languages():

    languages = [
        "Mandarin Chinese", "English", "Spanish", "Hindi", "French", "Portuguese", "Bengali", "Standard Arabic", "Russian", "Indonesian",
        "Urdu", "Standard German", "Japanese", "Swahili", "Western Punjabi", "Javanese", "Wu Chinese", "Telugu", "Korean", "Tamil",
        "Marathi", "Turkish", "Vietnamese", "Italian", "Yue Chinese", "Thai", "Egyptian Spoken Arabic", "Iranian Persian", "Huizhou Chinese", "Min Nan Chinese",
        "Gujarati", "Kannada", "Jinyu Chinese", "Filipino", "Burmese", "Hausa", "Polish", "Bhojpuri", "Xiang Chinese", "Ukrainian",
        "Malayalam", "Sunda", "Maithili", "Odia", "Algerian Spoken Arabic", "Hakka Chinese", "Nigerian Pidgin", "Eastern Punjabi", "Moroccan Spoken Arabic", "Zulu",
        "North Levantine Spoken Arabic", "Amharic", "Tagalog", "Northern Uzbek", "Sindhi", "Romanian", "Dutch", "Gan Chinese", "Northern Pashto", "Yoruba",
        "Sa’idi Spoken Arabic", "Saraiki", "Xhosa", "Malay", "Igbo", "Afrikaans", "Sudanese Spoken Arabic", "Sinhala", "Cebuano", "Mesopotamian Spoken Arabic",
        "Nepali", "Rangpuri", "Central Khmer", "Northern Kurdish", "Northeastern Thai", "South Azerbaijani", "Somali", "Bamanankan", "Bavarian", "Magahi",
        "Northern Sotho", "Southern Sotho", "Chhattisgarhi", "Tswana", "Czech", "Greek", "Chittagonian", "Assamese", "Deccan", "Kazakh",
        "Hungarian", "Shona", "Jula", "Swedish", "Sylheti", "Najdi Spoken Arabic", "Nigerian Fulfulde", "Tunisian Spoken Arabic", "Kinyarwanda", "Min Bei Chinese",


        ]

    for one in languages:
        lang = Language(
            name=one
        )
        db.session.add(lang)
        db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_languages():
    db.session.execute('TRUNCATE Languages RESTART IDENTITY CASCADE;')
    db.session.commit()
