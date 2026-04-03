
const $ = (id) => document.getElementById(id);

const DATASETS = [{"name": "Over 2.5", "slug": "over25", "columns": ["Rank", "League", "DateUTC (date)", "Home", "Away", "P(Over2.5)", "Pick", "Strength", "Model xG Total", "Model xG Home", "Model xG Away", "Home GF/Home", "Home GA/Home", "Away GF/Away", "Away GA/Away"], "rows": [{"Rank": 1, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 17:45", "Home": "N.E.C. Nijmegen", "Away": "PEC Zwolle", "P(Over2.5)": 0.9537974974053253, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 6.403581215744893, "Model xG Home": 4.823611111111111, "Model xG Away": 1.579970104633782, "Home GF/Home": 2.875, "Home GA/Home": 1.5, "Away GF/Away": 1.555555555555556, "Away GA/Away": 3.0}, {"Rank": 2, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 19:00", "Home": "PSV", "Away": "Excelsior Rotterdam", "P(Over2.5)": 0.9216732967082053, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 5.67168066529053, "Model xG Home": 4.414153439153439, "Model xG Away": 1.257527226137092, "Home GF/Home": 3.25, "Home GA/Home": 1.625, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 3, "League": "SerieA", "DateUTC (date)": "2026-01-23 19:45", "Home": "Inter", "Away": "Pisa", "P(Over2.5)": 0.8906496195604142, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 5.192459189046867, "Model xG Home": 4.408888888888889, "Model xG Away": 0.7835703001579778, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.333333333333333, "Away GA/Away": 2.0}, {"Rank": 4, "League": "LaLiga", "DateUTC (date)": "2026-01-18 20:00", "Home": "Real Sociedad", "Away": "FC Barcelona", "P(Over2.5)": 0.8728604553975208, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.970723784324321, "Model xG Home": 1.468789013732834, "Model xG Away": 3.501934770591487, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 2.5, "Away GA/Away": 1.5}, {"Rank": 5, "League": "EPL", "DateUTC (date)": "2026-01-19 20:00", "Home": "Brighton", "Away": "Bournemouth", "P(Over2.5)": 0.8695373350414999, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.93239546420978, "Model xG Home": 3.301807228915663, "Model xG Away": 1.630588235294118, "Home GF/Home": 1.8, "Home GA/Home": 1.1, "Away GF/Away": 1.8, "Away GA/Away": 2.9}, {"Rank": 6, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "TSG Hoffenheim", "Away": "Bayer 04 Leverkusen", "P(Over2.5)": 0.8607336143081639, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.834874056099813, "Model xG Home": 2.515527950310559, "Model xG Away": 2.319346105789254, "Home GF/Home": 2.142857142857143, "Home GA/Home": 1.571428571428571, "Away GF/Away": 2.142857142857143, "Away GA/Away": 2.0}, {"Rank": 7, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "FC Bayern München", "Away": "FC Augsburg", "P(Over2.5)": 0.8588174260710755, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.81436969197617, "Model xG Home": 4.223990683229814, "Model xG Away": 0.5903790087463556, "Home GF/Home": 3.875, "Home GA/Home": 0.75, "Away GF/Away": 1.142857142857143, "Away GA/Away": 1.857142857142857}, {"Rank": 8, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 13:30", "Home": "Telstar", "Away": "Ajax", "P(Over2.5)": 0.8560674269051484, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.785365803022755, "Model xG Home": 1.747685185185185, "Model xG Away": 3.037680617837569, "Home GF/Home": 1.666666666666667, "Home GA/Home": 2.111111111111111, "Away GF/Away": 2.125, "Away GA/Away": 1.875}, {"Rank": 9, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 19:00", "Home": "PSV", "Away": "NAC Breda", "P(Over2.5)": 0.8371462944954728, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.597979467696396, "Model xG Home": 3.635185185185185, "Model xG Away": 0.9627942825112108, "Home GF/Home": 3.25, "Home GA/Home": 1.625, "Away GF/Away": 0.875, "Away GA/Away": 2.0}, {"Rank": 10, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "1. FC Köln", "Away": "FC Bayern München", "P(Over2.5)": 0.8319095027783121, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.549463086032993, "Model xG Home": 0.8385093167701864, "Model xG Away": 3.710953769262807, "Home GF/Home": 2.0, "Home GA/Home": 1.571428571428571, "Away GF/Away": 3.428571428571428, "Away GA/Away": 0.7142857142857143}, {"Rank": 11, "League": "Bundesliga", "DateUTC (date)": "2026-01-16 19:30", "Home": "SV Werder Bremen", "Away": "Eintracht Frankfurt", "P(Over2.5)": 0.8169364307142526, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.417575104575992, "Model xG Home": 1.760869565217391, "Model xG Away": 2.6567055393586, "Home GF/Home": 1.142857142857143, "Home GA/Home": 1.714285714285714, "Away GF/Away": 2.25, "Away GA/Away": 2.625}, {"Rank": 12, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 15:30", "Home": "AZ", "Away": "FC Volendam", "P(Over2.5)": 0.8054318080248133, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.322346786248132, "Model xG Home": 3.415476190476191, "Model xG Away": 0.906870595771941, "Home GF/Home": 2.571428571428572, "Home GA/Home": 2.142857142857143, "Away GF/Away": 0.625, "Away GA/Away": 2.375}, {"Rank": 13, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 13:30", "Home": "Heracles Almelo", "Away": "FC Twente", "P(Over2.5)": 0.8030101403519133, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.302910646072081, "Model xG Home": 1.537962962962963, "Model xG Away": 2.764947683109118, "Home GF/Home": 2.25, "Home GA/Home": 2.625, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 14, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "RB Leipzig", "Away": "Sport-Club Freiburg", "P(Over2.5)": 0.7893983648144463, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.197252503485867, "Model xG Home": 3.385481366459627, "Model xG Away": 0.811771137026239, "Home GF/Home": 2.714285714285714, "Home GA/Home": 0.8571428571428571, "Away GF/Away": 1.375, "Away GA/Away": 2.125}, {"Rank": 15, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 11:15", "Home": "sc Heerenveen", "Away": "Feyenoord", "P(Over2.5)": 0.7819915781351126, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.142131446188341, "Model xG Home": 1.1796875, "Model xG Away": 2.962443946188341, "Home GF/Home": 1.875, "Home GA/Home": 1.75, "Away GF/Away": 2.5, "Away GA/Away": 1.125}, {"Rank": 16, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 17:45", "Home": "FC Twente", "Away": "PEC Zwolle", "P(Over2.5)": 0.7364408433489533, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.833308420528152, "Model xG Home": 2.516666666666667, "Model xG Away": 1.316641753861485, "Home GF/Home": 1.5, "Home GA/Home": 1.25, "Away GF/Away": 1.555555555555556, "Away GA/Away": 3.0}, {"Rank": 17, "League": "Ligue1", "DateUTC (date)": "2026-01-18 14:00", "Home": "RC Strasbourg Alsace", "Away": "FC Metz", "P(Over2.5)": 0.7277251022706517, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.779187148876404, "Model xG Home": 3.25390625, "Model xG Away": 0.5252808988764045, "Home GF/Home": 1.75, "Home GA/Home": 0.5, "Away GF/Away": 1.222222222222222, "Away GA/Away": 3.111111111111111}, {"Rank": 18, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "1. FC Köln", "Away": "1. FSV Mainz 05", "P(Over2.5)": 0.7233467845837657, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.752512540064828, "Model xG Home": 2.515527950310559, "Model xG Away": 1.236984589754269, "Home GF/Home": 2.0, "Home GA/Home": 1.571428571428571, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.142857142857143}, {"Rank": 19, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 17:30", "Home": "VfB Stuttgart", "Away": "Eintracht Frankfurt", "P(Over2.5)": 0.7232811660921891, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.752115287108632, "Model xG Home": 1.980978260869565, "Model xG Away": 1.771137026239067, "Home GF/Home": 1.285714285714286, "Home GA/Home": 1.142857142857143, "Away GF/Away": 2.25, "Away GA/Away": 2.625}, {"Rank": 20, "League": "SerieA", "DateUTC (date)": "2026-01-14 19:45", "Home": "Inter", "Away": "Lecce", "P(Over2.5)": 0.7225054944123834, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.747424960505529, "Model xG Home": 3.306666666666667, "Model xG Away": 0.4407582938388625, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 0.75, "Away GA/Away": 1.5}, {"Rank": 21, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 19:00", "Home": "Fortuna Sittard", "Away": "PSV", "P(Over2.5)": 0.7161412170288751, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.709322720273282, "Model xG Home": 0.8837677183356195, "Model xG Away": 2.825555001937663, "Home GF/Home": 1.777777777777778, "Home GA/Home": 1.444444444444444, "Away GF/Away": 2.888888888888889, "Away GA/Away": 0.8888888888888888}, {"Rank": 22, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 16:30", "Home": "FC Bayern München", "Away": "VfL Wolfsburg", "P(Over2.5)": 0.7081271642653908, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.66227500316897, "Model xG Home": 2.924301242236025, "Model xG Away": 0.7379737609329445, "Home GF/Home": 3.875, "Home GA/Home": 0.75, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.285714285714286}, {"Rank": 23, "League": "LaLiga", "DateUTC (date)": "2026-01-17 20:00", "Home": "Real Betis", "Away": "Villarreal CF", "P(Over2.5)": 0.7009225723172856, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.620820678132434, "Model xG Home": 1.694756554307116, "Model xG Away": 1.926064123825318, "Home GF/Home": 2.0, "Home GA/Home": 1.222222222222222, "Away GF/Away": 1.75, "Away GA/Away": 1.25}, {"Rank": 24, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "Hamburger SV", "Away": "Bayer 04 Leverkusen", "P(Over2.5)": 0.6915558949584784, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.568049657751299, "Model xG Home": 1.907608695652174, "Model xG Away": 1.660440962099125, "Home GF/Home": 1.625, "Home GA/Home": 1.125, "Away GF/Away": 2.142857142857143, "Away GA/Away": 2.0}, {"Rank": 25, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "VfL Wolfsburg", "Away": "1. FC Heidenheim 1846", "P(Over2.5)": 0.6763397944325307, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.484840442388135, "Model xG Home": 2.316381987577639, "Model xG Away": 1.168458454810495, "Home GF/Home": 1.625, "Home GA/Home": 2.375, "Away GF/Away": 0.7142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 26, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Liverpool", "Away": "Burnley", "P(Over2.5)": 0.6707687118000814, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.455102763997166, "Model xG Home": 2.466867469879519, "Model xG Away": 0.9882352941176471, "Home GF/Home": 1.5, "Home GA/Home": 1.0, "Away GF/Away": 1.2, "Away GA/Away": 2.6}, {"Rank": 27, "League": "Ligue1", "DateUTC (date)": "2026-01-17 18:00", "Home": "Toulouse FC", "Away": "OGC Nice", "P(Over2.5)": 0.6657970138722127, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.428875526685393, "Model xG Home": 2.091796875, "Model xG Away": 1.337078651685393, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.0, "Away GA/Away": 2.25}, {"Rank": 28, "League": "Ligue1", "DateUTC (date)": "2026-01-16 20:00", "Home": "Paris Saint-Germain", "Away": "LOSC Lille", "P(Over2.5)": 0.6597353802945721, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.397281260972612, "Model xG Home": 2.4840087890625, "Model xG Away": 0.9132724719101123, "Home GF/Home": 2.375, "Home GA/Home": 0.5, "Away GF/Away": 2.125, "Away GA/Away": 1.75}, {"Rank": 29, "League": "SerieA", "DateUTC (date)": "2026-01-10 14:00", "Home": "Udinese", "Away": "Pisa", "P(Over2.5)": 0.6507263800803963, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.351068983675618, "Model xG Home": 1.653333333333333, "Model xG Away": 1.697735650342285, "Home GF/Home": 1.0, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.333333333333333, "Away GA/Away": 2.0}, {"Rank": 30, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 17:30", "Home": "Bayer 04 Leverkusen", "Away": "VfB Stuttgart", "P(Over2.5)": 0.649393448335099, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.344304569653949, "Model xG Home": 2.311141304347826, "Model xG Away": 1.033163265306122, "Home GF/Home": 2.25, "Home GA/Home": 0.75, "Away GF/Away": 2.0, "Away GA/Away": 1.75}, {"Rank": 31, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 11:15", "Home": "sc Heerenveen", "Away": "FC Groningen", "P(Over2.5)": 0.6472246150404992, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.333337225959143, "Model xG Home": 1.703993055555556, "Model xG Away": 1.629344170403587, "Home GF/Home": 1.875, "Home GA/Home": 1.75, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 32, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "Bayer 04 Leverkusen", "Away": "SV Werder Bremen", "P(Over2.5)": 0.6379624116344654, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.287031388642413, "Model xG Home": 2.641304347826087, "Model xG Away": 0.6457270408163265, "Home GF/Home": 2.25, "Home GA/Home": 0.75, "Away GF/Away": 1.25, "Away GA/Away": 2.0}, {"Rank": 33, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 15:45", "Home": "Feyenoord", "Away": "Sparta Rotterdam", "P(Over2.5)": 0.627805154501184, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.237197124877742, "Model xG Home": 2.221502057613169, "Model xG Away": 1.015695067264574, "Home GF/Home": 2.444444444444445, "Home GA/Home": 1.333333333333333, "Away GF/Away": 1.125, "Away GA/Away": 1.625}, {"Rank": 34, "League": "SerieA", "DateUTC (date)": "2026-01-17 17:00", "Home": "Napoli", "Away": "Sassuolo", "P(Over2.5)": 0.6192809280373421, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.196096190977707, "Model xG Home": 2.020740740740741, "Model xG Away": 1.175355450236967, "Home GF/Home": 2.0, "Home GA/Home": 1.0, "Away GF/Away": 1.333333333333333, "Away GA/Away": 1.222222222222222}, {"Rank": 35, "League": "Ligue1", "DateUTC (date)": "2026-01-24 20:05", "Home": "Olympique de Marseille", "Away": "RC Lens", "P(Over2.5)": 0.6170640125945348, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.185510299625468, "Model xG Home": 1.59375, "Model xG Away": 1.591760299625468, "Home GF/Home": 2.666666666666667, "Home GA/Home": 1.111111111111111, "Away GF/Away": 1.666666666666667, "Away GA/Away": 1.0}, {"Rank": 36, "League": "LaLiga", "DateUTC (date)": "2026-01-23 20:00", "Home": "Levante UD", "Away": "Elche CF", "P(Over2.5)": 0.6168781371724782, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.184624629660686, "Model xG Home": 1.271067415730337, "Model xG Away": 1.913557213930348, "Home GF/Home": 1.0, "Home GA/Home": 2.428571428571428, "Away GF/Away": 0.875, "Away GA/Away": 1.875}, {"Rank": 37, "League": "SerieA", "DateUTC (date)": "2026-01-24 17:00", "Home": "Fiorentina", "Away": "Cagliari", "P(Over2.5)": 0.6159226638686193, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.180076531507811, "Model xG Home": 1.671703703703704, "Model xG Away": 1.508372827804107, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.1, "Away GA/Away": 1.4}, {"Rank": 38, "League": "EPL", "DateUTC (date)": "2026-01-17 12:30", "Home": "Man Utd", "Away": "Man City", "P(Over2.5)": 0.6157947971211379, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.179468462083629, "Model xG Home": 1.252409638554217, "Model xG Away": 1.927058823529412, "Home GF/Home": 1.8, "Home GA/Home": 1.3, "Away GF/Away": 1.8, "Away GA/Away": 1.1}, {"Rank": 39, "League": "Bundesliga", "DateUTC (date)": "2026-01-18 16:30", "Home": "FC Augsburg", "Away": "Sport-Club Freiburg", "P(Over2.5)": 0.6156841302013528, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.178942297027507, "Model xG Home": 1.403192934782609, "Model xG Away": 1.775749362244898, "Home GF/Home": 1.125, "Home GA/Home": 1.875, "Away GF/Away": 1.375, "Away GA/Away": 2.125}, {"Rank": 40, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 17:30", "Home": "RB Leipzig", "Away": "FC Bayern München", "P(Over2.5)": 0.6121374315572818, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.162133531318472, "Model xG Home": 1.137976929902396, "Model xG Away": 2.024156601416076, "Home GF/Home": 2.714285714285714, "Home GA/Home": 0.8571428571428571, "Away GF/Away": 3.428571428571428, "Away GA/Away": 0.7142857142857143}, {"Rank": 41, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "1. FC Union Berlin", "Away": "1. FSV Mainz 05", "P(Over2.5)": 0.6044877266115423, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.126227975662315, "Model xG Home": 2.043866459627329, "Model xG Away": 1.082361516034985, "Home GF/Home": 1.625, "Home GA/Home": 1.375, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.142857142857143}, {"Rank": 42, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "FC St. Pauli", "Away": "RB Leipzig", "P(Over2.5)": 0.6030410660332376, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.11948995436684, "Model xG Home": 1.090062111801242, "Model xG Away": 2.029427842565597, "Home GF/Home": 1.142857142857143, "Home GA/Home": 2.142857142857143, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 43, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Leeds", "Away": "Fulham", "P(Over2.5)": 0.6016851241726725, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.113189227498228, "Model xG Home": 1.935542168674699, "Model xG Away": 1.17764705882353, "Home GF/Home": 1.8, "Home GA/Home": 1.3, "Away GF/Away": 1.1, "Away GA/Away": 1.7}, {"Rank": 44, "League": "SerieA", "DateUTC (date)": "2026-01-17 14:00", "Home": "Udinese", "Away": "Inter", "P(Over2.5)": 0.5967366506041718, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.09031420045638, "Model xG Home": 0.8266666666666667, "Model xG Away": 2.263647533789714, "Home GF/Home": 1.0, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.777777777777778, "Away GA/Away": 1.0}, {"Rank": 45, "League": "SerieA", "DateUTC (date)": "2026-01-15 17:30", "Home": "Hellas Verona", "Away": "Bologna", "P(Over2.5)": 0.5917049951842576, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.067242408285062, "Model xG Home": 1.01037037037037, "Model xG Away": 2.056872037914692, "Home GF/Home": 1.0, "Home GA/Home": 1.5, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 46, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "Sport-Club Freiburg", "Away": "Hamburger SV", "P(Over2.5)": 0.5907225475270323, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.06275917643011, "Model xG Home": 2.683229813664596, "Model xG Away": 0.3795293627655144, "Home GF/Home": 2.0, "Home GA/Home": 1.285714285714286, "Away GF/Away": 0.4285714285714285, "Away GA/Away": 2.285714285714286}, {"Rank": 47, "League": "LaLiga", "DateUTC (date)": "2026-01-11 15:15", "Home": "Levante UD", "Away": "RCD Espanyol de Barcelona", "P(Over2.5)": 0.588678248423297, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.053452640489367, "Model xG Home": 0.5931647940074907, "Model xG Away": 2.460287846481876, "Home GF/Home": 1.0, "Home GA/Home": 2.428571428571428, "Away GF/Away": 1.125, "Away GA/Away": 0.875}, {"Rank": 48, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 20:00", "Home": "FC Twente", "Away": "Excelsior Rotterdam", "P(Over2.5)": 0.5778464814094825, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.004630222791658, "Model xG Home": 2.037301587301587, "Model xG Away": 0.9673286354900703, "Home GF/Home": 1.5, "Home GA/Home": 1.25, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 49, "League": "LaLiga", "DateUTC (date)": "2026-01-12 20:00", "Home": "Sevilla FC", "Away": "Celta", "P(Over2.5)": 0.5737427587368322, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.986340923348303, "Model xG Home": 0.9227007906783189, "Model xG Away": 2.063640132669984, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.666666666666667, "Away GF/Away": 1.375, "Away GA/Away": 0.875}, {"Rank": 50, "League": "SerieA", "DateUTC (date)": "2026-01-11 14:00", "Home": "Fiorentina", "Away": "Milan", "P(Over2.5)": 0.5710894377863267, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.974574337370545, "Model xG Home": 0.7462962962962962, "Model xG Away": 2.228278041074249, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.625, "Away GA/Away": 0.625}, {"Rank": 51, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "1. FC Heidenheim 1846", "Away": "RB Leipzig", "P(Over2.5)": 0.569222062726682, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.966320291703638, "Model xG Home": 0.9538043478260869, "Model xG Away": 2.012515943877551, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 52, "League": "Ligue1", "DateUTC (date)": "2026-01-23 19:00", "Home": "AJ Auxerre", "Away": "Paris Saint-Germain", "P(Over2.5)": 0.5569822316685503, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.912755539950063, "Model xG Home": 0.8116319444444445, "Model xG Away": 2.101123595505618, "Home GF/Home": 1.111111111111111, "Home GA/Home": 1.222222222222222, "Away GF/Away": 2.0, "Away GA/Away": 1.222222222222222}, {"Rank": 53, "League": "LaLiga", "DateUTC (date)": "2026-01-24 20:00", "Home": "Villarreal CF", "Away": "Real Madrid", "P(Over2.5)": 0.5441996681972561, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.857758647461817, "Model xG Home": 1.657095297544736, "Model xG Away": 1.200663349917081, "Home GF/Home": 2.222222222222222, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 2.0, "Away GA/Away": 1.1}, {"Rank": 54, "League": "Ligue1", "DateUTC (date)": "2026-01-18 16:15", "Home": "FC Nantes", "Away": "Paris FC", "P(Over2.5)": 0.5431376222985861, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.853230337078652, "Model xG Home": 1.0625, "Model xG Away": 1.790730337078652, "Home GF/Home": 1.0, "Home GA/Home": 1.875, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.777777777777778}, {"Rank": 55, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Fulham", "Away": "Brighton", "P(Over2.5)": 0.5397220004313172, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.838708260362793, "Model xG Home": 1.688489495170766, "Model xG Away": 1.150218765192027, "Home GF/Home": 1.727272727272727, "Home GA/Home": 1.181818181818182, "Away GF/Away": 1.181818181818182, "Away GA/Away": 1.545454545454545}, {"Rank": 56, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "SV Werder Bremen", "Away": "TSG Hoffenheim", "P(Over2.5)": 0.5355335461136961, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.820984915705413, "Model xG Home": 0.7546583850931676, "Model xG Away": 2.066326530612245, "Home GF/Home": 1.142857142857143, "Home GA/Home": 1.714285714285714, "Away GF/Away": 1.75, "Away GA/Away": 1.125}, {"Rank": 57, "League": "Ligue1", "DateUTC (date)": "2026-01-18 19:45", "Home": "Olympique Lyonnais", "Away": "Stade Brestois 29", "P(Over2.5)": 0.5345989438081472, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.817042661516854, "Model xG Home": 2.091796875, "Model xG Away": 0.7252457865168539, "Home GF/Home": 1.75, "Home GA/Home": 0.75, "Away GF/Away": 1.125, "Away GA/Away": 2.0}, {"Rank": 58, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Man City", "Away": "Wolves", "P(Over2.5)": 0.5335958836417255, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.812816653097563, "Model xG Home": 2.540575525241462, "Model xG Away": 0.2722411278561012, "Home GF/Home": 2.454545454545455, "Home GA/Home": 0.7272727272727273, "Away GF/Away": 0.4545454545454545, "Away GA/Away": 1.636363636363636}, {"Rank": 59, "League": "LaLiga", "DateUTC (date)": "2026-01-24 17:30", "Home": "Sevilla FC", "Away": "Athletic Club", "P(Over2.5)": 0.5323723052140578, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.807668551403062, "Model xG Home": 1.6403569612059, "Model xG Away": 1.167311590197162, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.666666666666667, "Away GF/Away": 0.7777777777777778, "Away GA/Away": 1.555555555555556}, {"Rank": 60, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "TSG Hoffenheim", "Away": "Borussia Mönchengladbach", "P(Over2.5)": 0.5314980140119296, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.803994712348115, "Model xG Home": 1.257763975155279, "Model xG Away": 1.546230737192836, "Home GF/Home": 2.142857142857143, "Home GA/Home": 1.571428571428571, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.0}, {"Rank": 61, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Chelsea", "Away": "Brentford", "P(Over2.5)": 0.5293273652463676, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.794890148830617, "Model xG Home": 1.707831325301205, "Model xG Away": 1.087058823529412, "Home GF/Home": 1.5, "Home GA/Home": 1.1, "Away GF/Away": 1.2, "Away GA/Away": 1.8}, {"Rank": 62, "League": "Ligue1", "DateUTC (date)": "2026-01-18 16:15", "Home": "Stade Rennais FC", "Away": "Havre Athletic Club", "P(Over2.5)": 0.5264953281153546, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.783046765273876, "Model xG Home": 2.353271484375, "Model xG Away": 0.4297752808988764, "Home GF/Home": 2.25, "Home GA/Home": 1.0, "Away GF/Away": 0.5, "Away GA/Away": 1.75}, {"Rank": 63, "League": "EPL", "DateUTC (date)": "2026-01-24 17:30", "Home": "Bournemouth", "Away": "Liverpool", "P(Over2.5)": 0.5253464546888551, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.778253509907398, "Model xG Home": 1.505526237180125, "Model xG Away": 1.272727272727273, "Home GF/Home": 1.454545454545455, "Home GA/Home": 1.0, "Away GF/Away": 1.545454545454545, "Away GA/Away": 1.636363636363636}, {"Rank": 64, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 15:30", "Home": "Ajax", "Away": "Go Ahead Eagles", "P(Over2.5)": 0.5244186073447513, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.774387098857702, "Model xG Home": 1.918569958847737, "Model xG Away": 0.8558171400099651, "Home GF/Home": 1.625, "Home GA/Home": 0.875, "Away GF/Away": 1.444444444444444, "Away GA/Away": 2.111111111111111}, {"Rank": 65, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 13:30", "Home": "Go Ahead Eagles", "Away": "Fortuna Sittard", "P(Over2.5)": 0.5233181278928954, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.769806718153131, "Model xG Home": 1.817592592592593, "Model xG Away": 0.9522141255605381, "Home GF/Home": 1.625, "Home GA/Home": 1.25, "Away GF/Away": 1.125, "Away GA/Away": 2.0}, {"Rank": 66, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 14:30", "Home": "Borussia Mönchengladbach", "Away": "FC Augsburg", "P(Over2.5)": 0.5216326222872749, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.762802636582583, "Model xG Home": 1.090062111801242, "Model xG Away": 1.672740524781341, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.142857142857143, "Away GA/Away": 1.857142857142857}, {"Rank": 67, "League": "LaLiga", "DateUTC (date)": "2026-01-16 20:00", "Home": "RCD Espanyol de Barcelona", "Away": "Girona FC", "P(Over2.5)": 0.5173881914769395, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.745224563822585, "Model xG Home": 1.664627548897212, "Model xG Away": 1.080597014925373, "Home GF/Home": 1.3, "Home GA/Home": 1.2, "Away GF/Away": 1.0, "Away GA/Away": 1.888888888888889}, {"Rank": 68, "League": "LaLiga", "DateUTC (date)": "2026-01-17 17:30", "Home": "CA Osasuna", "Away": "Real Oviedo", "P(Over2.5)": 0.5147812431381736, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.734469558160095, "Model xG Home": 2.134137883201554, "Model xG Away": 0.6003316749585407, "Home GF/Home": 1.666666666666667, "Home GA/Home": 1.0, "Away GF/Away": 0.6666666666666666, "Away GA/Away": 1.888888888888889}, {"Rank": 69, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 20:00", "Home": "NAC Breda", "Away": "N.E.C. Nijmegen", "P(Over2.5)": 0.5132834993546715, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.72830463747255, "Model xG Home": 1.056378600823045, "Model xG Away": 1.671926036649505, "Home GF/Home": 1.0, "Home GA/Home": 1.111111111111111, "Away GF/Away": 2.222222222222222, "Away GA/Away": 1.888888888888889}, {"Rank": 70, "League": "SerieA", "DateUTC (date)": "2026-01-19 17:30", "Home": "Cremonese", "Away": "Hellas Verona", "P(Over2.5)": 0.5088165622285163, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.709977883096366, "Model xG Home": 1.818666666666667, "Model xG Away": 0.8913112164296997, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.444444444444444, "Away GF/Away": 0.7, "Away GA/Away": 1.8}, {"Rank": 71, "League": "SerieA", "DateUTC (date)": "2026-01-18 11:30", "Home": "Parma", "Away": "Genoa", "P(Over2.5)": 0.5024561062051641, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.684032999824469, "Model xG Home": 1.028740740740741, "Model xG Away": 1.655292259083728, "Home GF/Home": 0.7, "Home GA/Home": 1.3, "Away GF/Away": 1.444444444444444, "Away GA/Away": 1.777777777777778}, {"Rank": 72, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "Eintracht Frankfurt", "Away": "TSG Hoffenheim", "P(Over2.5)": 0.5018900767801617, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.681732475598935, "Model xG Home": 1.131987577639751, "Model xG Away": 1.549744897959183, "Home GF/Home": 1.714285714285714, "Home GA/Home": 1.285714285714286, "Away GF/Away": 1.75, "Away GA/Away": 1.125}, {"Rank": 73, "League": "LaLiga", "DateUTC (date)": "2026-01-17 13:00", "Home": "Real Madrid", "Away": "Levante UD", "P(Over2.5)": 0.5011086012362441, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.678558518270073, "Model xG Home": 1.89812734082397, "Model xG Away": 0.7804311774461029, "Home GF/Home": 2.333333333333333, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.3, "Away GA/Away": 1.2}, {"Rank": 74, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "Borussia Dortmund", "Away": "SV Werder Bremen", "P(Over2.5)": 0.4995181393593232, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.672106730891114, "Model xG Home": 2.180124223602485, "Model xG Away": 0.4919825072886296, "Home GF/Home": 1.857142857142857, "Home GA/Home": 0.5714285714285714, "Away GF/Away": 1.25, "Away GA/Away": 2.0}, {"Rank": 75, "League": "EPL", "DateUTC (date)": "2026-01-18 14:00", "Home": "Wolves", "Away": "Newcastle", "P(Over2.5)": 0.4948310715021889, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.653153791637137, "Model xG Home": 0.7590361445783133, "Model xG Away": 1.894117647058823, "Home GF/Home": 1.0, "Home GA/Home": 2.3, "Away GF/Away": 1.0, "Away GA/Away": 1.2}, {"Rank": 76, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 13:30", "Home": "FC Volendam", "Away": "FC Utrecht", "P(Over2.5)": 0.4942916022580214, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.65097805827751, "Model xG Home": 1.522427983539095, "Model xG Away": 1.128550074738415, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.333333333333333, "Away GF/Away": 1.25, "Away GA/Away": 1.75}, {"Rank": 77, "League": "EPL", "DateUTC (date)": "2026-01-17 17:30", "Home": "Nott'm Forest", "Away": "Arsenal", "P(Over2.5)": 0.4923439274027428, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.643132530120482, "Model xG Home": 0.683132530120482, "Model xG Away": 1.96, "Home GF/Home": 1.2, "Home GA/Home": 1.7, "Away GF/Away": 1.4, "Away GA/Away": 0.9}, {"Rank": 78, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 15:45", "Home": "Sparta Rotterdam", "Away": "Heracles Almelo", "P(Over2.5)": 0.4898242036257301, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.633004853383528, "Model xG Home": 1.429218106995885, "Model xG Away": 1.203786746387643, "Home GF/Home": 1.0, "Home GA/Home": 2.0, "Away GF/Away": 0.8888888888888888, "Away GA/Away": 2.555555555555555}, {"Rank": 79, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Burnley", "Away": "Spurs", "P(Over2.5)": 0.4870183036907267, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.621755861559998, "Model xG Home": 0.7841282485313152, "Model xG Away": 1.837627613028683, "Home GF/Home": 0.9090909090909091, "Home GA/Home": 1.363636363636364, "Away GF/Away": 1.636363636363636, "Away GA/Away": 1.363636363636364}, {"Rank": 80, "League": "Ligue1", "DateUTC (date)": "2026-01-17 16:00", "Home": "RC Lens", "Away": "AJ Auxerre", "P(Over2.5)": 0.4829534612294378, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.605512640449438, "Model xG Home": 2.390625, "Model xG Away": 0.2148876404494382, "Home GF/Home": 2.0, "Home GA/Home": 0.5, "Away GF/Away": 0.5, "Away GA/Away": 2.0}, {"Rank": 81, "League": "LaLiga", "DateUTC (date)": "2026-01-19 20:00", "Home": "Elche CF", "Away": "Sevilla FC", "P(Over2.5)": 0.4798413797487324, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.593118055167359, "Model xG Home": 1.792675821889305, "Model xG Away": 0.8004422332780543, "Home GF/Home": 1.7, "Home GA/Home": 0.8, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.555555555555556}, {"Rank": 82, "League": "SerieA", "DateUTC (date)": "2026-01-18 19:45", "Home": "Milan", "Away": "Lecce", "P(Over2.5)": 0.4762917834504591, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.579023696682465, "Model xG Home": 1.984, "Model xG Away": 0.5950236966824645, "Home GF/Home": 1.6, "Home GA/Home": 0.9, "Away GF/Away": 0.75, "Away GA/Away": 1.5}, {"Rank": 83, "League": "Ligue1", "DateUTC (date)": "2026-01-24 16:00", "Home": "Stade Rennais FC", "Away": "FC Lorient", "P(Over2.5)": 0.4735479058731977, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.568159124824438, "Model xG Home": 2.353271484375, "Model xG Away": 0.2148876404494382, "Home GF/Home": 2.25, "Home GA/Home": 1.0, "Away GF/Away": 0.25, "Away GA/Away": 1.75}, {"Rank": 84, "League": "LaLiga", "DateUTC (date)": "2026-01-18 15:15", "Home": "Atlético de Madrid", "Away": "Deportivo Alavés", "P(Over2.5)": 0.4666985352729258, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.541151141918374, "Model xG Home": 2.278506034124012, "Model xG Away": 0.2626451077943616, "Home GF/Home": 2.444444444444445, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 0.375, "Away GA/Away": 1.375}, {"Rank": 85, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 15:30", "Home": "Ajax", "Away": "FC Volendam", "P(Over2.5)": 0.4635266313700916, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.528696696977246, "Model xG Home": 2.158391203703704, "Model xG Away": 0.3703054932735426, "Home GF/Home": 1.625, "Home GA/Home": 0.875, "Away GF/Away": 0.625, "Away GA/Away": 2.375}, {"Rank": 86, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 17:30", "Home": "1. FC Union Berlin", "Away": "Borussia Dortmund", "P(Over2.5)": 0.4543353398600418, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.492787128438332, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.538982780612245, "Home GF/Home": 1.625, "Home GA/Home": 1.375, "Away GF/Away": 1.625, "Away GA/Away": 1.0}, {"Rank": 87, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 20:00", "Home": "FC Groningen", "Away": "NAC Breda", "P(Over2.5)": 0.4499734007679475, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.475835097990367, "Model xG Home": 1.957407407407407, "Model xG Away": 0.5184276905829597, "Home GF/Home": 1.75, "Home GA/Home": 0.875, "Away GF/Away": 0.875, "Away GA/Away": 2.0}, {"Rank": 88, "League": "LaLiga", "DateUTC (date)": "2026-01-18 17:30", "Home": "Celta", "Away": "Rayo Vallecano", "P(Over2.5)": 0.4468213624090138, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.46361954273576, "Model xG Home": 1.410037453183521, "Model xG Away": 1.053582089552239, "Home GF/Home": 1.3, "Home GA/Home": 1.3, "Away GF/Away": 0.9, "Away GA/Away": 1.6}, {"Rank": 89, "League": "Ligue1", "DateUTC (date)": "2026-01-24 18:00", "Home": "Havre Athletic Club", "Away": "AS Monaco", "P(Over2.5)": 0.4417611141785764, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.444067108497191, "Model xG Home": 1.36962890625, "Model xG Away": 1.074438202247191, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.0, "Away GF/Away": 1.25, "Away GA/Away": 1.875}, {"Rank": 90, "League": "Bundesliga", "DateUTC (date)": "2026-01-15 19:30", "Home": "FC Augsburg", "Away": "1. FC Union Berlin", "P(Over2.5)": 0.4364036600619952, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.423441659272404, "Model xG Home": 1.131987577639751, "Model xG Away": 1.291454081632653, "Home GF/Home": 1.125, "Home GA/Home": 1.875, "Away GF/Away": 1.0, "Away GA/Away": 1.714285714285714}, {"Rank": 91, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "1. FC Heidenheim 1846", "Away": "1. FC Köln", "P(Over2.5)": 0.4348442725950641, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.41745230700976, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.463647959183673, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.0, "Away GA/Away": 1.625}, {"Rank": 92, "League": "SerieA", "DateUTC (date)": "2026-01-18 17:00", "Home": "Torino", "Away": "Roma", "P(Over2.5)": 0.4255647379187255, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.381936176935229, "Model xG Home": 0.6365333333333333, "Model xG Away": 1.745402843601896, "Home GF/Home": 1.1, "Home GA/Home": 1.8, "Away GF/Away": 1.1, "Away GA/Away": 0.7}, {"Rank": 93, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 17:30", "Home": "VfL Wolfsburg", "Away": "FC St. Pauli", "P(Over2.5)": 0.4129257255165628, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.333882126220053, "Model xG Home": 1.31148097826087, "Model xG Away": 1.022401147959184, "Home GF/Home": 1.625, "Home GA/Home": 2.375, "Away GF/Away": 0.625, "Away GA/Away": 1.375}, {"Rank": 94, "League": "Ligue1", "DateUTC (date)": "2026-01-16 18:00", "Home": "AS Monaco", "Away": "FC Lorient", "P(Over2.5)": 0.4128860992913437, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.33373200491573, "Model xG Home": 1.9755859375, "Model xG Away": 0.3581460674157304, "Home GF/Home": 1.888888888888889, "Home GA/Home": 1.666666666666667, "Away GF/Away": 0.25, "Away GA/Away": 1.75}, {"Rank": 95, "League": "LaLiga", "DateUTC (date)": "2026-01-10 15:15", "Home": "Villarreal CF", "Away": "Deportivo Alavés", "P(Over2.5)": 0.4030310921744074, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.296493500040373, "Model xG Home": 2.07136912193092, "Model xG Away": 0.2251243781094527, "Home GF/Home": 2.222222222222222, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 0.375, "Away GA/Away": 1.375}, {"Rank": 96, "League": "SerieA", "DateUTC (date)": "2026-01-17 19:45", "Home": "Cagliari", "Away": "Juventus", "P(Over2.5)": 0.3940670500258446, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.262776900122871, "Model xG Home": 0.7348148148148148, "Model xG Away": 1.527962085308057, "Home GF/Home": 1.111111111111111, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.2, "Away GA/Away": 0.8}, {"Rank": 97, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Spurs", "Away": "West Ham", "P(Over2.5)": 0.3921747825157673, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.255676824946847, "Model xG Home": 1.366265060240964, "Model xG Away": 0.8894117647058825, "Home GF/Home": 1.2, "Home GA/Home": 1.2, "Away GF/Away": 0.9, "Away GA/Away": 1.8}, {"Rank": 98, "League": "SerieA", "DateUTC (date)": "2026-01-11 19:45", "Home": "Inter", "Away": "Napoli", "P(Over2.5)": 0.3902136501467264, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.248324381253291, "Model xG Home": 1.543111111111111, "Model xG Away": 0.7052132701421799, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.2, "Away GA/Away": 0.7}, {"Rank": 99, "League": "SerieA", "DateUTC (date)": "2026-01-19 19:45", "Home": "Lazio", "Away": "Como", "P(Over2.5)": 0.3844395699926364, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.226710900473933, "Model xG Home": 1.116, "Model xG Away": 1.110710900473934, "Home GF/Home": 1.5, "Home GA/Home": 0.9, "Away GF/Away": 1.4, "Away GA/Away": 0.9}, {"Rank": 100, "League": "LaLiga", "DateUTC (date)": "2026-01-17 15:15", "Home": "RCD Mallorca", "Away": "Athletic Club", "P(Over2.5)": 0.3833669330385209, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.22270117024808, "Model xG Home": 1.28885189809035, "Model xG Away": 0.9338492721577298, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.333333333333333, "Away GF/Away": 0.7777777777777778, "Away GA/Away": 1.555555555555556}, {"Rank": 101, "League": "SerieA", "DateUTC (date)": "2026-01-14 17:30", "Home": "Napoli", "Away": "Parma", "P(Over2.5)": 0.3784340019239607, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.204281200631911, "Model xG Home": 1.653333333333333, "Model xG Away": 0.5509478672985781, "Home GF/Home": 2.0, "Home GA/Home": 1.0, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 102, "League": "SerieA", "DateUTC (date)": "2026-01-10 19:45", "Home": "Atalanta", "Away": "Torino", "P(Over2.5)": 0.3784077484495729, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.204183254344391, "Model xG Home": 1.322666666666666, "Model xG Away": 0.881516587677725, "Home GF/Home": 1.2, "Home GA/Home": 0.9, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.333333333333333}, {"Rank": 103, "League": "LaLiga", "DateUTC (date)": "2026-01-10 20:00", "Home": "Valencia CF", "Away": "Elche CF", "P(Over2.5)": 0.3682542599994461, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.1663654263017, "Model xG Home": 1.55352684144819, "Model xG Away": 0.6128385848535103, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 0.875, "Away GA/Away": 1.875}, {"Rank": 104, "League": "Bundesliga", "DateUTC (date)": "2026-01-23 19:30", "Home": "FC St. Pauli", "Away": "Hamburger SV", "P(Over2.5)": 0.3681084293431981, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.165823117179436, "Model xG Home": 1.533274179236912, "Model xG Away": 0.6325489379425239, "Home GF/Home": 1.142857142857143, "Home GA/Home": 2.142857142857143, "Away GF/Away": 0.4285714285714285, "Away GA/Away": 2.285714285714286}, {"Rank": 105, "League": "SerieA", "DateUTC (date)": "2026-01-18 14:00", "Home": "Bologna", "Away": "Fiorentina", "P(Over2.5)": 0.367911764261015, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.165091802703177, "Model xG Home": 1.616592592592593, "Model xG Away": 0.5484992101105843, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.8888888888888888, "Away GF/Away": 0.7, "Away GA/Away": 1.6}, {"Rank": 106, "League": "SerieA", "DateUTC (date)": "2026-01-12 19:45", "Home": "Juventus", "Away": "Cremonese", "P(Over2.5)": 0.3457741921644079, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.082991047919958, "Model xG Home": 1.377777777777778, "Model xG Away": 0.7052132701421799, "Home GF/Home": 1.666666666666667, "Home GA/Home": 0.8888888888888888, "Away GF/Away": 0.9, "Away GA/Away": 1.0}, {"Rank": 107, "League": "Bundesliga", "DateUTC (date)": "2026-01-18 14:30", "Home": "VfB Stuttgart", "Away": "1. FC Union Berlin", "P(Over2.5)": 0.3452015917235729, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.080872100392952, "Model xG Home": 1.293700088731145, "Model xG Away": 0.7871720116618075, "Home GF/Home": 1.285714285714286, "Home GA/Home": 1.142857142857143, "Away GF/Away": 1.0, "Away GA/Away": 1.714285714285714}, {"Rank": 108, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "Hamburger SV", "Away": "Borussia Mönchengladbach", "P(Over2.5)": 0.3397658939235096, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.060764989225504, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.106960641399417, "Home GF/Home": 1.625, "Home GA/Home": 1.125, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.0}, {"Rank": 109, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 17:45", "Home": "PEC Zwolle", "Away": "AZ", "P(Over2.5)": 0.3373133827470375, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.051697069515953, "Model xG Home": 0.7068415637860082, "Model xG Away": 1.344855505729945, "Home GF/Home": 0.875, "Home GA/Home": 1.375, "Away GF/Away": 1.444444444444444, "Away GA/Away": 1.444444444444444}, {"Rank": 110, "League": "SerieA", "DateUTC (date)": "2026-01-10 14:00", "Home": "Como", "Away": "Bologna", "P(Over2.5)": 0.3313818206391281, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.029773565034229, "Model xG Home": 1.515555555555556, "Model xG Away": 0.514218009478673, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 111, "League": "SerieA", "DateUTC (date)": "2026-01-24 14:00", "Home": "Como", "Away": "Torino", "P(Over2.5)": 0.3289078379234534, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.020631911532385, "Model xG Home": 1.653333333333333, "Model xG Away": 0.3672985781990521, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.333333333333333}, {"Rank": 112, "League": "SerieA", "DateUTC (date)": "2026-01-12 17:30", "Home": "Genoa", "Away": "Cagliari", "P(Over2.5)": 0.3111370247311676, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.954968720379147, "Model xG Home": 0.6943999999999999, "Model xG Away": 1.260568720379147, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 1.1, "Away GA/Away": 1.4}, {"Rank": 113, "League": "Ligue1", "DateUTC (date)": "2026-01-17 20:05", "Home": "Angers SCO", "Away": "Olympique de Marseille", "P(Over2.5)": 0.2996780258070169, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.91258394048455, "Model xG Home": 0.784423828125, "Model xG Away": 1.12816011235955, "Home GF/Home": 1.5, "Home GA/Home": 0.875, "Away GF/Away": 1.5, "Away GA/Away": 0.875}, {"Rank": 114, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Sunderland", "Away": "Crystal Palace", "P(Over2.5)": 0.2973167767414751, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.903841247342311, "Model xG Home": 1.113253012048193, "Model xG Away": 0.7905882352941177, "Home GF/Home": 1.6, "Home GA/Home": 0.8, "Away GF/Away": 1.2, "Away GA/Away": 1.1}, {"Rank": 115, "League": "LaLiga", "DateUTC (date)": "2026-01-18 13:00", "Home": "Getafe CF", "Away": "Valencia CF", "P(Over2.5)": 0.296335569153156, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.90020714157055, "Model xG Home": 1.449958385351644, "Model xG Away": 0.4502487562189055, "Home GF/Home": 0.875, "Home GA/Home": 0.75, "Away GF/Away": 0.6666666666666666, "Away GA/Away": 2.444444444444445}, {"Rank": 116, "League": "SerieA", "DateUTC (date)": "2026-01-10 17:00", "Home": "Roma", "Away": "Sassuolo", "P(Over2.5)": 0.293006622968822, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.887872369473212, "Model xG Home": 1.234897119341564, "Model xG Away": 0.6529752501316481, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.5555555555555556, "Away GF/Away": 1.333333333333333, "Away GA/Away": 1.222222222222222}, {"Rank": 117, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "1. FSV Mainz 05", "Away": "VfL Wolfsburg", "P(Over2.5)": 0.2759786019358272, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.824613385726962, "Model xG Home": 0.4716614906832298, "Model xG Away": 1.352951895043732, "Home GF/Home": 0.625, "Home GA/Home": 1.375, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.285714285714286}, {"Rank": 118, "League": "EPL", "DateUTC (date)": "2026-01-24 12:30", "Home": "West Ham", "Away": "Sunderland", "P(Over2.5)": 0.2699580576086515, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.802162466101646, "Model xG Home": 0.9514089415513294, "Model xG Away": 0.8507535245503162, "Home GF/Home": 1.181818181818182, "Home GA/Home": 2.272727272727273, "Away GF/Away": 0.4545454545454545, "Away GA/Away": 1.272727272727273}, {"Rank": 119, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "Borussia Dortmund", "Away": "FC St. Pauli", "P(Over2.5)": 0.2546542354430004, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.744826657371023, "Model xG Home": 1.498835403726708, "Model xG Away": 0.2459912536443148, "Home GF/Home": 1.857142857142857, "Home GA/Home": 0.5714285714285714, "Away GF/Away": 0.625, "Away GA/Away": 1.375}, {"Rank": 120, "League": "EPL", "DateUTC (date)": "2026-01-18 16:30", "Home": "Aston Villa", "Away": "Everton", "P(Over2.5)": 0.2511130754305138, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.731495393338058, "Model xG Home": 1.13855421686747, "Model xG Away": 0.5929411764705883, "Home GF/Home": 1.8, "Home GA/Home": 0.8, "Away GF/Away": 0.9, "Away GA/Away": 1.0}, {"Rank": 121, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "1. FSV Mainz 05", "Away": "1. FC Heidenheim 1846", "P(Over2.5)": 0.2082501554958072, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.567392096590189, "Model xG Home": 0.890916149068323, "Model xG Away": 0.6764759475218659, "Home GF/Home": 0.625, "Home GA/Home": 1.375, "Away GF/Away": 0.7142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 122, "League": "LaLiga", "DateUTC (date)": "2026-01-24 15:15", "Home": "Valencia CF", "Away": "RCD Espanyol de Barcelona", "P(Over2.5)": 0.1944018975184532, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.512914516058907, "Model xG Home": 0.7249791926758221, "Model xG Away": 0.7879353233830846, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 1.125, "Away GA/Away": 0.875}, {"Rank": 123, "League": "LaLiga", "DateUTC (date)": "2026-01-10 13:00", "Home": "Real Oviedo", "Away": "Real Betis", "P(Over2.5)": 0.1763714773393688, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.440496228801892, "Model xG Home": 0.2175983724048643, "Model xG Away": 1.222897856397027, "Home GF/Home": 0.2222222222222222, "Home GA/Home": 1.111111111111111, "Away GF/Away": 1.222222222222222, "Away GA/Away": 1.444444444444444}, {"Rank": 124, "League": "SerieA", "DateUTC (date)": "2026-01-11 17:00", "Home": "Hellas Verona", "Away": "Lazio", "P(Over2.5)": 0.1611057853676232, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.377560119361067, "Model xG Home": 0.642962962962963, "Model xG Away": 0.7345971563981042, "Home GF/Home": 1.0, "Home GA/Home": 1.5, "Away GF/Away": 0.5555555555555556, "Away GA/Away": 0.7777777777777778}, {"Rank": 125, "League": "LaLiga", "DateUTC (date)": "2026-01-10 17:30", "Home": "Girona FC", "Away": "CA Osasuna", "P(Over2.5)": 0.1594000095331825, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.370420059502736, "Model xG Home": 0.8034401442641144, "Model xG Away": 0.5669799152386217, "Home GF/Home": 0.8888888888888888, "Home GA/Home": 1.888888888888889, "Away GF/Away": 0.3333333333333333, "Away GA/Away": 1.333333333333333}, {"Rank": 126, "League": "SerieA", "DateUTC (date)": "2026-01-15 19:45", "Home": "Como", "Away": "Milan", "P(Over2.5)": 0.1457002202598113, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.312174170616114, "Model xG Home": 0.775, "Model xG Away": 0.5371741706161137, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.625, "Away GA/Away": 0.625}, {"Rank": 127, "League": "LaLiga", "DateUTC (date)": "2026-01-11 13:00", "Home": "Rayo Vallecano", "Away": "RCD Mallorca", "P(Over2.5)": 0.1357999808868848, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.268959509568264, "Model xG Home": 0.7061485642946318, "Model xG Away": 0.5628109452736318, "Home GF/Home": 0.625, "Home GA/Home": 0.625, "Away GF/Away": 1.0, "Away GA/Away": 1.666666666666667}, {"Rank": 128, "League": "SerieA", "DateUTC (date)": "2026-01-11 11:30", "Home": "Lecce", "Away": "Parma", "P(Over2.5)": 0.1231763335688444, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.212232227488152, "Model xG Home": 0.4959999999999999, "Model xG Away": 0.7162322274881516, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 129, "League": "SerieA", "DateUTC (date)": "2026-01-16 19:45", "Home": "Pisa", "Away": "Atalanta", "P(Over2.5)": 0.1139161425090396, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.169261014569071, "Model xG Home": 0.09185185185185185, "Model xG Away": 1.07740916271722, "Home GF/Home": 0.1, "Home GA/Home": 1.0, "Away GF/Away": 1.222222222222222, "Away GA/Away": 1.111111111111111}, {"Rank": 130, "League": "SerieA", "DateUTC (date)": "2026-01-24 19:45", "Home": "Lecce", "Away": "Lazio", "P(Over2.5)": 0.08447283319169885, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.022428646656135, "Model xG Home": 0.3857777777777778, "Model xG Away": 0.6366508688783571, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 0.5555555555555556, "Away GA/Away": 0.7777777777777778}, {"Rank": 131, "League": "Eredivisie", "DateUTC (date)": "2026-01-16 19:00", "Home": "Excelsior Rotterdam", "Away": "Telstar", "P(Over2.5)": 0.0743946054065805, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 0.9673485393714591, "Model xG Home": 0.497119341563786, "Model xG Away": 0.4702291978076731, "Home GF/Home": 0.8888888888888888, "Home GA/Home": 1.111111111111111, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 132, "League": "LaLiga", "DateUTC (date)": "2026-01-24 13:00", "Home": "Rayo Vallecano", "Away": "CA Osasuna", "P(Over2.5)": 0.04084126583013403, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 0.7525224998602492, "Model xG Home": 0.5649188514357053, "Model xG Away": 0.1876036484245439, "Home GF/Home": 0.625, "Home GA/Home": 0.625, "Away GF/Away": 0.3333333333333333, "Away GA/Away": 1.333333333333333}, {"Rank": 133, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 00:00", "Home": "M'gladbach", "Away": "Augsburg", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 134, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Bayern Munich", "Away": "Wolfsburg", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 135, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Levadeiakos", "Away": "Volos NFC", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 136, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "OFI Crete", "Away": "Asteras Tripolis", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 137, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Aris", "Away": "AEK", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 138, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Panathinaikos", "Away": "Panserraikos", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 139, "League": "SerieA", "DateUTC (date)": "2026-01-11 00:00", "Home": "Verona", "Away": "Lazio", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 140, "League": "SerieB", "DateUTC (date)": "2026-01-11 00:00", "Home": "Mantova", "Away": "Palermo", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 141, "League": "SerieB", "DateUTC (date)": "2026-01-11 00:00", "Home": "Padova", "Away": "Modena", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 142, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Heerenveen", "Away": "Feyenoord", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 143, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Go Ahead Eagles", "Away": "For Sittard", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 144, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Sparta Rotterdam", "Away": "Heracles", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 145, "League": "PrimeiraLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Nacional", "Away": "Santa Clara", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 146, "League": "PrimeiraLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Moreirense", "Away": "Tondela", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 147, "League": "ScotPrem", "DateUTC (date)": "2026-01-11 00:00", "Home": "Dundee", "Away": "Hearts", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 148, "League": "ScotPrem", "DateUTC (date)": "2026-01-11 00:00", "Home": "Aberdeen", "Away": "Rangers", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 149, "League": "LaLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Vallecano", "Away": "Mallorca", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 150, "League": "LaLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Levante", "Away": "Espanol", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 151, "League": "LaLiga", "DateUTC (date)": "2026-01-12 00:00", "Home": "Sevilla", "Away": "Celta", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 152, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Leganes", "Away": "Valladolid", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 153, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Granada", "Away": "Castellon", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 154, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Malaga", "Away": "Ceuta", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 155, "League": "LaLiga2", "DateUTC (date)": "2026-01-12 00:00", "Home": "Huesca", "Away": "Cordoba", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 156, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Club Leon", "Away": "Cruz Azul", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 157, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Santos Laguna", "Away": "Necaxa", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 158, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Monterrey", "Away": "Toluca", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 159, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "UNAM Pumas", "Away": "Queretaro", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 160, "League": "LigaMX", "DateUTC (date)": "2026-01-12 00:00", "Home": "Atl. San Luis", "Away": "Tigres UANL", "P(Over2.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}], "probCol": "P(Over2.5)"}, {"name": "BTTS Yes", "slug": "btts-yes", "columns": ["Rank", "League", "DateUTC (date)", "Home", "Away", "P(BTTS)", "Pick", "Strength", "Model xG Total", "Model xG Home", "Model xG Away", "Home GF/Home", "Home GA/Home", "Away GF/Away", "Away GA/Away"], "rows": [{"Rank": 1, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 17:45", "Home": "N.E.C. Nijmegen", "Away": "PEC Zwolle", "P(BTTS)": 0.7876366519151745, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 6.403581215744893, "Model xG Home": 4.823611111111111, "Model xG Away": 1.579970104633782, "Home GF/Home": 2.875, "Home GA/Home": 1.5, "Away GF/Away": 1.555555555555556, "Away GA/Away": 3.0}, {"Rank": 2, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 19:00", "Home": "PSV", "Away": "Excelsior Rotterdam", "P(BTTS)": 0.7069809715043932, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 5.67168066529053, "Model xG Home": 4.414153439153439, "Model xG Away": 1.257527226137092, "Home GF/Home": 3.25, "Home GA/Home": 1.625, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 3, "League": "SerieA", "DateUTC (date)": "2026-01-23 19:45", "Home": "Inter", "Away": "Pisa", "P(BTTS)": 0.5366173470047677, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 5.192459189046867, "Model xG Home": 4.408888888888889, "Model xG Away": 0.7835703001579778, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.333333333333333, "Away GA/Away": 2.0}, {"Rank": 4, "League": "LaLiga", "DateUTC (date)": "2026-01-18 20:00", "Home": "Real Sociedad", "Away": "FC Barcelona", "P(BTTS)": 0.7465950191639518, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.970723784324321, "Model xG Home": 1.468789013732834, "Model xG Away": 3.501934770591487, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 2.5, "Away GA/Away": 1.5}, {"Rank": 5, "League": "EPL", "DateUTC (date)": "2026-01-19 20:00", "Home": "Brighton", "Away": "Bournemouth", "P(BTTS)": 0.7745782865711802, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.93239546420978, "Model xG Home": 3.301807228915663, "Model xG Away": 1.630588235294118, "Home GF/Home": 1.8, "Home GA/Home": 1.1, "Away GF/Away": 1.8, "Away GA/Away": 2.9}, {"Rank": 6, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "TSG Hoffenheim", "Away": "Bayer 04 Leverkusen", "P(BTTS)": 0.8287895902028505, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.834874056099813, "Model xG Home": 2.515527950310559, "Model xG Away": 2.319346105789254, "Home GF/Home": 2.142857142857143, "Home GA/Home": 1.571428571428571, "Away GF/Away": 2.142857142857143, "Away GA/Away": 2.0}, {"Rank": 7, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "FC Bayern München", "Away": "FC Augsburg", "P(BTTS)": 0.4393550003244436, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 4.81436969197617, "Model xG Home": 4.223990683229814, "Model xG Away": 0.5903790087463556, "Home GF/Home": 3.875, "Home GA/Home": 0.75, "Away GF/Away": 1.142857142857143, "Away GA/Away": 1.857142857142857}, {"Rank": 8, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 13:30", "Home": "Telstar", "Away": "Ajax", "P(BTTS)": 0.7862284388142772, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.785365803022755, "Model xG Home": 1.747685185185185, "Model xG Away": 3.037680617837569, "Home GF/Home": 1.666666666666667, "Home GA/Home": 2.111111111111111, "Away GF/Away": 2.125, "Away GA/Away": 1.875}, {"Rank": 9, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 19:00", "Home": "PSV", "Away": "NAC Breda", "P(BTTS)": 0.6018686489043629, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 4.597979467696396, "Model xG Home": 3.635185185185185, "Model xG Away": 0.9627942825112108, "Home GF/Home": 3.25, "Home GA/Home": 1.625, "Away GF/Away": 0.875, "Away GA/Away": 2.0}, {"Rank": 10, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "1. FC Köln", "Away": "FC Bayern München", "P(BTTS)": 0.5537641441300243, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 4.549463086032993, "Model xG Home": 0.8385093167701864, "Model xG Away": 3.710953769262807, "Home GF/Home": 2.0, "Home GA/Home": 1.571428571428571, "Away GF/Away": 3.428571428571428, "Away GA/Away": 0.7142857142857143}, {"Rank": 11, "League": "Bundesliga", "DateUTC (date)": "2026-01-16 19:30", "Home": "SV Werder Bremen", "Away": "Eintracht Frankfurt", "P(BTTS)": 0.7699890814135671, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.417575104575992, "Model xG Home": 1.760869565217391, "Model xG Away": 2.6567055393586, "Home GF/Home": 1.142857142857143, "Home GA/Home": 1.714285714285714, "Away GF/Away": 2.25, "Away GA/Away": 2.625}, {"Rank": 12, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 15:30", "Home": "AZ", "Away": "FC Volendam", "P(BTTS)": 0.5766220950632078, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 4.322346786248132, "Model xG Home": 3.415476190476191, "Model xG Away": 0.906870595771941, "Home GF/Home": 2.571428571428572, "Home GA/Home": 2.142857142857143, "Away GF/Away": 0.625, "Away GA/Away": 2.375}, {"Rank": 13, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 13:30", "Home": "Heracles Almelo", "Away": "FC Twente", "P(BTTS)": 0.7357314802489171, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.302910646072081, "Model xG Home": 1.537962962962963, "Model xG Away": 2.764947683109118, "Home GF/Home": 2.25, "Home GA/Home": 2.625, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 14, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "RB Leipzig", "Away": "Sport-Club Freiburg", "P(BTTS)": 0.5371046360947987, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 4.197252503485867, "Model xG Home": 3.385481366459627, "Model xG Away": 0.811771137026239, "Home GF/Home": 2.714285714285714, "Home GA/Home": 0.8571428571428571, "Away GF/Away": 1.375, "Away GA/Away": 2.125}, {"Rank": 15, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 11:15", "Home": "sc Heerenveen", "Away": "Feyenoord", "P(BTTS)": 0.6568217415790575, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.142131446188341, "Model xG Home": 1.1796875, "Model xG Away": 2.962443946188341, "Home GF/Home": 1.875, "Home GA/Home": 1.75, "Away GF/Away": 2.5, "Away GA/Away": 1.125}, {"Rank": 16, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 17:45", "Home": "FC Twente", "Away": "PEC Zwolle", "P(BTTS)": 0.672875740738888, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.833308420528152, "Model xG Home": 2.516666666666667, "Model xG Away": 1.316641753861485, "Home GF/Home": 1.5, "Home GA/Home": 1.25, "Away GF/Away": 1.555555555555556, "Away GA/Away": 3.0}, {"Rank": 17, "League": "Ligue1", "DateUTC (date)": "2026-01-18 14:00", "Home": "RC Strasbourg Alsace", "Away": "FC Metz", "P(BTTS)": 0.3928289884304476, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 3.779187148876404, "Model xG Home": 3.25390625, "Model xG Away": 0.5252808988764045, "Home GF/Home": 1.75, "Home GA/Home": 0.5, "Away GF/Away": 1.222222222222222, "Away GA/Away": 3.111111111111111}, {"Rank": 18, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "1. FC Köln", "Away": "1. FSV Mainz 05", "P(BTTS)": 0.6523803518326784, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.752512540064828, "Model xG Home": 2.515527950310559, "Model xG Away": 1.236984589754269, "Home GF/Home": 2.0, "Home GA/Home": 1.571428571428571, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.142857142857143}, {"Rank": 19, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 17:30", "Home": "VfB Stuttgart", "Away": "Eintracht Frankfurt", "P(BTTS)": 0.7153943902140193, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.752115287108632, "Model xG Home": 1.980978260869565, "Model xG Away": 1.771137026239067, "Home GF/Home": 1.285714285714286, "Home GA/Home": 1.142857142857143, "Away GF/Away": 2.25, "Away GA/Away": 2.625}, {"Rank": 20, "League": "SerieA", "DateUTC (date)": "2026-01-14 19:45", "Home": "Inter", "Away": "Lecce", "P(BTTS)": 0.34339204824251707, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 3.747424960505529, "Model xG Home": 3.306666666666667, "Model xG Away": 0.4407582938388625, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 0.75, "Away GA/Away": 1.5}, {"Rank": 21, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 19:00", "Home": "Fortuna Sittard", "Away": "PSV", "P(BTTS)": 0.5519952906014445, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.709322720273282, "Model xG Home": 0.8837677183356195, "Model xG Away": 2.825555001937663, "Home GF/Home": 1.777777777777778, "Home GA/Home": 1.444444444444444, "Away GF/Away": 2.888888888888889, "Away GA/Away": 0.8888888888888888}, {"Rank": 22, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 16:30", "Home": "FC Bayern München", "Away": "VfL Wolfsburg", "P(BTTS)": 0.49389019161378556, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 3.66227500316897, "Model xG Home": 2.924301242236025, "Model xG Away": 0.7379737609329445, "Home GF/Home": 3.875, "Home GA/Home": 0.75, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.285714285714286}, {"Rank": 23, "League": "LaLiga", "DateUTC (date)": "2026-01-17 20:00", "Home": "Real Betis", "Away": "Villarreal CF", "P(BTTS)": 0.6973961650917868, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.620820678132434, "Model xG Home": 1.694756554307116, "Model xG Away": 1.926064123825318, "Home GF/Home": 2.0, "Home GA/Home": 1.222222222222222, "Away GF/Away": 1.75, "Away GA/Away": 1.25}, {"Rank": 24, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "Hamburger SV", "Away": "Bayer 04 Leverkusen", "P(BTTS)": 0.6897207507229982, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.568049657751299, "Model xG Home": 1.907608695652174, "Model xG Away": 1.660440962099125, "Home GF/Home": 1.625, "Home GA/Home": 1.125, "Away GF/Away": 2.142857142857143, "Away GA/Away": 2.0}, {"Rank": 25, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "VfL Wolfsburg", "Away": "1. FC Heidenheim 1846", "P(BTTS)": 0.6211831103319674, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.484840442388135, "Model xG Home": 2.316381987577639, "Model xG Away": 1.168458454810495, "Home GF/Home": 1.625, "Home GA/Home": 2.375, "Away GF/Away": 0.7142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 26, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Liverpool", "Away": "Burnley", "P(BTTS)": 0.5745008259120402, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.455102763997166, "Model xG Home": 2.466867469879519, "Model xG Away": 0.9882352941176471, "Home GF/Home": 1.5, "Home GA/Home": 1.0, "Away GF/Away": 1.2, "Away GA/Away": 2.6}, {"Rank": 27, "League": "Ligue1", "DateUTC (date)": "2026-01-17 18:00", "Home": "Toulouse FC", "Away": "OGC Nice", "P(BTTS)": 0.6463465650497858, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.428875526685393, "Model xG Home": 2.091796875, "Model xG Away": 1.337078651685393, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.0, "Away GA/Away": 2.25}, {"Rank": 28, "League": "Ligue1", "DateUTC (date)": "2026-01-16 20:00", "Home": "Paris Saint-Germain", "Away": "LOSC Lille", "P(BTTS)": 0.5488468101646825, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 3.397281260972612, "Model xG Home": 2.4840087890625, "Model xG Away": 0.9132724719101123, "Home GF/Home": 2.375, "Home GA/Home": 0.5, "Away GF/Away": 2.125, "Away GA/Away": 1.75}, {"Rank": 29, "League": "SerieA", "DateUTC (date)": "2026-01-10 14:00", "Home": "Udinese", "Away": "Pisa", "P(BTTS)": 0.660538409403371, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.351068983675618, "Model xG Home": 1.653333333333333, "Model xG Away": 1.697735650342285, "Home GF/Home": 1.0, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.333333333333333, "Away GA/Away": 2.0}, {"Rank": 30, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 17:30", "Home": "Bayer 04 Leverkusen", "Away": "VfB Stuttgart", "P(BTTS)": 0.5802572787199735, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.344304569653949, "Model xG Home": 2.311141304347826, "Model xG Away": 1.033163265306122, "Home GF/Home": 2.25, "Home GA/Home": 0.75, "Away GF/Away": 2.0, "Away GA/Away": 1.75}, {"Rank": 31, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 11:15", "Home": "sc Heerenveen", "Away": "FC Groningen", "P(BTTS)": 0.6576602287428894, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.333337225959143, "Model xG Home": 1.703993055555556, "Model xG Away": 1.629344170403587, "Home GF/Home": 1.875, "Home GA/Home": 1.75, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 32, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "Bayer 04 Leverkusen", "Away": "SV Werder Bremen", "P(BTTS)": 0.4418151259390136, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 3.287031388642413, "Model xG Home": 2.641304347826087, "Model xG Away": 0.6457270408163265, "Home GF/Home": 2.25, "Home GA/Home": 0.75, "Away GF/Away": 1.25, "Away GA/Away": 2.0}, {"Rank": 33, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 15:45", "Home": "Feyenoord", "Away": "Sparta Rotterdam", "P(BTTS)": 0.5686771031541449, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.237197124877742, "Model xG Home": 2.221502057613169, "Model xG Away": 1.015695067264574, "Home GF/Home": 2.444444444444445, "Home GA/Home": 1.333333333333333, "Away GF/Away": 1.125, "Away GA/Away": 1.625}, {"Rank": 34, "League": "SerieA", "DateUTC (date)": "2026-01-17 17:00", "Home": "Napoli", "Away": "Sassuolo", "P(BTTS)": 0.5996551752724512, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.196096190977707, "Model xG Home": 2.020740740740741, "Model xG Away": 1.175355450236967, "Home GF/Home": 2.0, "Home GA/Home": 1.0, "Away GF/Away": 1.333333333333333, "Away GA/Away": 1.222222222222222}, {"Rank": 35, "League": "Ligue1", "DateUTC (date)": "2026-01-24 20:05", "Home": "Olympique de Marseille", "Away": "RC Lens", "P(BTTS)": 0.6346278558142698, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.185510299625468, "Model xG Home": 1.59375, "Model xG Away": 1.591760299625468, "Home GF/Home": 2.666666666666667, "Home GA/Home": 1.111111111111111, "Away GF/Away": 1.666666666666667, "Away GA/Away": 1.0}, {"Rank": 36, "League": "LaLiga", "DateUTC (date)": "2026-01-23 20:00", "Home": "Levante UD", "Away": "Elche CF", "P(BTTS)": 0.613307194506213, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.184624629660686, "Model xG Home": 1.271067415730337, "Model xG Away": 1.913557213930348, "Home GF/Home": 1.0, "Home GA/Home": 2.428571428571428, "Away GF/Away": 0.875, "Away GA/Away": 1.875}, {"Rank": 37, "League": "SerieA", "DateUTC (date)": "2026-01-24 17:00", "Home": "Fiorentina", "Away": "Cagliari", "P(BTTS)": 0.6323861220232906, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.180076531507811, "Model xG Home": 1.671703703703704, "Model xG Away": 1.508372827804107, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.1, "Away GA/Away": 1.4}, {"Rank": 38, "League": "EPL", "DateUTC (date)": "2026-01-17 12:30", "Home": "Man Utd", "Away": "Man City", "P(BTTS)": 0.6102167770172917, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.179468462083629, "Model xG Home": 1.252409638554217, "Model xG Away": 1.927058823529412, "Home GF/Home": 1.8, "Home GA/Home": 1.3, "Away GF/Away": 1.8, "Away GA/Away": 1.1}, {"Rank": 39, "League": "Bundesliga", "DateUTC (date)": "2026-01-18 16:30", "Home": "FC Augsburg", "Away": "Sport-Club Freiburg", "P(BTTS)": 0.6264623194977579, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.178942297027507, "Model xG Home": 1.403192934782609, "Model xG Away": 1.775749362244898, "Home GF/Home": 1.125, "Home GA/Home": 1.875, "Away GF/Away": 1.375, "Away GA/Away": 2.125}, {"Rank": 40, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 17:30", "Home": "RB Leipzig", "Away": "FC Bayern München", "P(BTTS)": 0.5897634143209276, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.162133531318472, "Model xG Home": 1.137976929902396, "Model xG Away": 2.024156601416076, "Home GF/Home": 2.714285714285714, "Home GA/Home": 0.8571428571428571, "Away GF/Away": 3.428571428571428, "Away GA/Away": 0.7142857142857143}, {"Rank": 41, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "1. FC Union Berlin", "Away": "1. FSV Mainz 05", "P(BTTS)": 0.5755615709109255, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.126227975662315, "Model xG Home": 2.043866459627329, "Model xG Away": 1.082361516034985, "Home GF/Home": 1.625, "Home GA/Home": 1.375, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.142857142857143}, {"Rank": 42, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "FC St. Pauli", "Away": "RB Leipzig", "P(BTTS)": 0.5765733977473437, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.11948995436684, "Model xG Home": 1.090062111801242, "Model xG Away": 2.029427842565597, "Home GF/Home": 1.142857142857143, "Home GA/Home": 2.142857142857143, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 43, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Leeds", "Away": "Fulham", "P(BTTS)": 0.5921103529323464, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.113189227498228, "Model xG Home": 1.935542168674699, "Model xG Away": 1.17764705882353, "Home GF/Home": 1.8, "Home GA/Home": 1.3, "Away GF/Away": 1.1, "Away GA/Away": 1.7}, {"Rank": 44, "League": "SerieA", "DateUTC (date)": "2026-01-17 14:00", "Home": "Udinese", "Away": "Inter", "P(BTTS)": 0.5040118946249411, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 3.09031420045638, "Model xG Home": 0.8266666666666667, "Model xG Away": 2.263647533789714, "Home GF/Home": 1.0, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.777777777777778, "Away GA/Away": 1.0}, {"Rank": 45, "League": "SerieA", "DateUTC (date)": "2026-01-15 17:30", "Home": "Hellas Verona", "Away": "Bologna", "P(BTTS)": 0.5546119682364148, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 3.067242408285062, "Model xG Home": 1.01037037037037, "Model xG Away": 2.056872037914692, "Home GF/Home": 1.0, "Home GA/Home": 1.5, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 46, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "Sport-Club Freiburg", "Away": "Hamburger SV", "P(BTTS)": 0.2942331013352332, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 3.06275917643011, "Model xG Home": 2.683229813664596, "Model xG Away": 0.3795293627655144, "Home GF/Home": 2.0, "Home GA/Home": 1.285714285714286, "Away GF/Away": 0.4285714285714285, "Away GA/Away": 2.285714285714286}, {"Rank": 47, "League": "LaLiga", "DateUTC (date)": "2026-01-11 15:15", "Home": "Levante UD", "Away": "RCD Espanyol de Barcelona", "P(BTTS)": 0.4092096044582182, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 3.053452640489367, "Model xG Home": 0.5931647940074907, "Model xG Away": 2.460287846481876, "Home GF/Home": 1.0, "Home GA/Home": 2.428571428571428, "Away GF/Away": 1.125, "Away GA/Away": 0.875}, {"Rank": 48, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 20:00", "Home": "FC Twente", "Away": "Excelsior Rotterdam", "P(BTTS)": 0.5390799593044036, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 3.004630222791658, "Model xG Home": 2.037301587301587, "Model xG Away": 0.9673286354900703, "Home GF/Home": 1.5, "Home GA/Home": 1.25, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 49, "League": "LaLiga", "DateUTC (date)": "2026-01-12 20:00", "Home": "Sevilla FC", "Away": "Celta", "P(BTTS)": 0.5260367387169866, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.986340923348303, "Model xG Home": 0.9227007906783189, "Model xG Away": 2.063640132669984, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.666666666666667, "Away GF/Away": 1.375, "Away GA/Away": 0.875}, {"Rank": 50, "League": "SerieA", "DateUTC (date)": "2026-01-11 14:00", "Home": "Fiorentina", "Away": "Milan", "P(BTTS)": 0.46923611610759736, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.974574337370545, "Model xG Home": 0.7462962962962962, "Model xG Away": 2.228278041074249, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.625, "Away GA/Away": 0.625}, {"Rank": 51, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "1. FC Heidenheim 1846", "Away": "RB Leipzig", "P(BTTS)": 0.5325679277043405, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.966320291703638, "Model xG Home": 0.9538043478260869, "Model xG Away": 2.012515943877551, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 52, "League": "Ligue1", "DateUTC (date)": "2026-01-23 19:00", "Home": "AJ Auxerre", "Away": "Paris Saint-Germain", "P(BTTS)": 0.4878742377827208, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.912755539950063, "Model xG Home": 0.8116319444444445, "Model xG Away": 2.101123595505618, "Home GF/Home": 1.111111111111111, "Home GA/Home": 1.222222222222222, "Away GF/Away": 2.0, "Away GA/Away": 1.222222222222222}, {"Rank": 53, "League": "LaLiga", "DateUTC (date)": "2026-01-24 20:00", "Home": "Villarreal CF", "Away": "Real Madrid", "P(BTTS)": 0.5657107025232984, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.857758647461817, "Model xG Home": 1.657095297544736, "Model xG Away": 1.200663349917081, "Home GF/Home": 2.222222222222222, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 2.0, "Away GA/Away": 1.1}, {"Rank": 54, "League": "Ligue1", "DateUTC (date)": "2026-01-18 16:15", "Home": "FC Nantes", "Away": "Paris FC", "P(BTTS)": 0.5452287361423603, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.853230337078652, "Model xG Home": 1.0625, "Model xG Away": 1.790730337078652, "Home GF/Home": 1.0, "Home GA/Home": 1.875, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.777777777777778}, {"Rank": 55, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Fulham", "Away": "Brighton", "P(BTTS)": 0.5571352253933906, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.838708260362793, "Model xG Home": 1.688489495170766, "Model xG Away": 1.150218765192027, "Home GF/Home": 1.727272727272727, "Home GA/Home": 1.181818181818182, "Away GF/Away": 1.181818181818182, "Away GA/Away": 1.545454545454545}, {"Rank": 56, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "SV Werder Bremen", "Away": "TSG Hoffenheim", "P(BTTS)": 0.46272588623559546, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.820984915705413, "Model xG Home": 0.7546583850931676, "Model xG Away": 2.066326530612245, "Home GF/Home": 1.142857142857143, "Home GA/Home": 1.714285714285714, "Away GF/Away": 1.75, "Away GA/Away": 1.125}, {"Rank": 57, "League": "Ligue1", "DateUTC (date)": "2026-01-18 19:45", "Home": "Olympique Lyonnais", "Away": "Stade Brestois 29", "P(BTTS)": 0.4521118503782526, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.817042661516854, "Model xG Home": 2.091796875, "Model xG Away": 0.7252457865168539, "Home GF/Home": 1.75, "Home GA/Home": 0.75, "Away GF/Away": 1.125, "Away GA/Away": 2.0}, {"Rank": 58, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Man City", "Away": "Wolves", "P(BTTS)": 0.21954405221184667, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.812816653097563, "Model xG Home": 2.540575525241462, "Model xG Away": 0.2722411278561012, "Home GF/Home": 2.454545454545455, "Home GA/Home": 0.7272727272727273, "Away GF/Away": 0.4545454545454545, "Away GA/Away": 1.636363636363636}, {"Rank": 59, "League": "LaLiga", "DateUTC (date)": "2026-01-24 17:30", "Home": "Sevilla FC", "Away": "Athletic Club", "P(BTTS)": 0.5552322522986546, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.807668551403062, "Model xG Home": 1.6403569612059, "Model xG Away": 1.167311590197162, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.666666666666667, "Away GF/Away": 0.7777777777777778, "Away GA/Away": 1.555555555555556}, {"Rank": 60, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "TSG Hoffenheim", "Away": "Borussia Mönchengladbach", "P(BTTS)": 0.5632291330237384, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.803994712348115, "Model xG Home": 1.257763975155279, "Model xG Away": 1.546230737192836, "Home GF/Home": 2.142857142857143, "Home GA/Home": 1.571428571428571, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.0}, {"Rank": 61, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Chelsea", "Away": "Brentford", "P(BTTS)": 0.5426563095318183, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.794890148830617, "Model xG Home": 1.707831325301205, "Model xG Away": 1.087058823529412, "Home GF/Home": 1.5, "Home GA/Home": 1.1, "Away GF/Away": 1.2, "Away GA/Away": 1.8}, {"Rank": 62, "League": "Ligue1", "DateUTC (date)": "2026-01-18 16:15", "Home": "Stade Rennais FC", "Away": "Havre Athletic Club", "P(BTTS)": 0.31613681200668153, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.783046765273876, "Model xG Home": 2.353271484375, "Model xG Away": 0.4297752808988764, "Home GF/Home": 2.25, "Home GA/Home": 1.0, "Away GF/Away": 0.5, "Away GA/Away": 1.75}, {"Rank": 63, "League": "EPL", "DateUTC (date)": "2026-01-24 17:30", "Home": "Bournemouth", "Away": "Liverpool", "P(BTTS)": 0.5601797000520495, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.778253509907398, "Model xG Home": 1.505526237180125, "Model xG Away": 1.272727272727273, "Home GF/Home": 1.454545454545455, "Home GA/Home": 1.0, "Away GF/Away": 1.545454545454545, "Away GA/Away": 1.636363636363636}, {"Rank": 64, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 15:30", "Home": "Ajax", "Away": "Go Ahead Eagles", "P(BTTS)": 0.4906351192532823, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.774387098857702, "Model xG Home": 1.918569958847737, "Model xG Away": 0.8558171400099651, "Home GF/Home": 1.625, "Home GA/Home": 0.875, "Away GF/Away": 1.444444444444444, "Away GA/Away": 2.111111111111111}, {"Rank": 65, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 13:30", "Home": "Go Ahead Eagles", "Away": "Fortuna Sittard", "P(BTTS)": 0.5143721569775347, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.769806718153131, "Model xG Home": 1.817592592592593, "Model xG Away": 0.9522141255605381, "Home GF/Home": 1.625, "Home GA/Home": 1.25, "Away GF/Away": 1.125, "Away GA/Away": 2.0}, {"Rank": 66, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 14:30", "Home": "Borussia Mönchengladbach", "Away": "FC Augsburg", "P(BTTS)": 0.5391871453726115, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.762802636582583, "Model xG Home": 1.090062111801242, "Model xG Away": 1.672740524781341, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.142857142857143, "Away GA/Away": 1.857142857142857}, {"Rank": 67, "League": "LaLiga", "DateUTC (date)": "2026-01-16 20:00", "Home": "RCD Espanyol de Barcelona", "Away": "Girona FC", "P(BTTS)": 0.5355798967892778, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.745224563822585, "Model xG Home": 1.664627548897212, "Model xG Away": 1.080597014925373, "Home GF/Home": 1.3, "Home GA/Home": 1.2, "Away GF/Away": 1.0, "Away GA/Away": 1.888888888888889}, {"Rank": 68, "League": "LaLiga", "DateUTC (date)": "2026-01-17 17:30", "Home": "CA Osasuna", "Away": "Real Oviedo", "P(BTTS)": 0.3979522245512967, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.734469558160095, "Model xG Home": 2.134137883201554, "Model xG Away": 0.6003316749585407, "Home GF/Home": 1.666666666666667, "Home GA/Home": 1.0, "Away GF/Away": 0.6666666666666666, "Away GA/Away": 1.888888888888889}, {"Rank": 69, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 20:00", "Home": "NAC Breda", "Away": "N.E.C. Nijmegen", "P(BTTS)": 0.529732370295717, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.72830463747255, "Model xG Home": 1.056378600823045, "Model xG Away": 1.671926036649505, "Home GF/Home": 1.0, "Home GA/Home": 1.111111111111111, "Away GF/Away": 2.222222222222222, "Away GA/Away": 1.888888888888889}, {"Rank": 70, "League": "SerieA", "DateUTC (date)": "2026-01-19 17:30", "Home": "Cremonese", "Away": "Hellas Verona", "P(BTTS)": 0.49417870191804825, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.709977883096366, "Model xG Home": 1.818666666666667, "Model xG Away": 0.8913112164296997, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.444444444444444, "Away GF/Away": 0.7, "Away GA/Away": 1.8}, {"Rank": 71, "League": "SerieA", "DateUTC (date)": "2026-01-18 11:30", "Home": "Parma", "Away": "Genoa", "P(BTTS)": 0.5197941722652328, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.684032999824469, "Model xG Home": 1.028740740740741, "Model xG Away": 1.655292259083728, "Home GF/Home": 0.7, "Home GA/Home": 1.3, "Away GF/Away": 1.444444444444444, "Away GA/Away": 1.777777777777778}, {"Rank": 72, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "Eintracht Frankfurt", "Away": "TSG Hoffenheim", "P(BTTS)": 0.5337505069855254, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.681732475598935, "Model xG Home": 1.131987577639751, "Model xG Away": 1.549744897959183, "Home GF/Home": 1.714285714285714, "Home GA/Home": 1.285714285714286, "Away GF/Away": 1.75, "Away GA/Away": 1.125}, {"Rank": 73, "League": "LaLiga", "DateUTC (date)": "2026-01-17 13:00", "Home": "Real Madrid", "Away": "Levante UD", "P(BTTS)": 0.4606046856861242, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.678558518270073, "Model xG Home": 1.89812734082397, "Model xG Away": 0.7804311774461029, "Home GF/Home": 2.333333333333333, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.3, "Away GA/Away": 1.2}, {"Rank": 74, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "Borussia Dortmund", "Away": "SV Werder Bremen", "P(BTTS)": 0.34466593298322357, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.672106730891114, "Model xG Home": 2.180124223602485, "Model xG Away": 0.4919825072886296, "Home GF/Home": 1.857142857142857, "Home GA/Home": 0.5714285714285714, "Away GF/Away": 1.25, "Away GA/Away": 2.0}, {"Rank": 75, "League": "EPL", "DateUTC (date)": "2026-01-18 14:00", "Home": "Wolves", "Away": "Newcastle", "P(BTTS)": 0.4518603103095071, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.653153791637137, "Model xG Home": 0.7590361445783133, "Model xG Away": 1.894117647058823, "Home GF/Home": 1.0, "Home GA/Home": 2.3, "Away GF/Away": 1.0, "Away GA/Away": 1.2}, {"Rank": 76, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 13:30", "Home": "FC Volendam", "Away": "FC Utrecht", "P(BTTS)": 0.5288986733849962, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.65097805827751, "Model xG Home": 1.522427983539095, "Model xG Away": 1.128550074738415, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.333333333333333, "Away GF/Away": 1.25, "Away GA/Away": 1.75}, {"Rank": 77, "League": "EPL", "DateUTC (date)": "2026-01-17 17:30", "Home": "Nott'm Forest", "Away": "Arsenal", "P(BTTS)": 0.4252471746329862, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.643132530120482, "Model xG Home": 0.683132530120482, "Model xG Away": 1.96, "Home GF/Home": 1.2, "Home GA/Home": 1.7, "Away GF/Away": 1.4, "Away GA/Away": 0.9}, {"Rank": 78, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 15:45", "Home": "Sparta Rotterdam", "Away": "Heracles Almelo", "P(BTTS)": 0.5323102701444007, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 2.633004853383528, "Model xG Home": 1.429218106995885, "Model xG Away": 1.203786746387643, "Home GF/Home": 1.0, "Home GA/Home": 2.0, "Away GF/Away": 0.8888888888888888, "Away GA/Away": 2.555555555555555}, {"Rank": 79, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Burnley", "Away": "Spurs", "P(BTTS)": 0.4569629952879661, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.621755861559998, "Model xG Home": 0.7841282485313152, "Model xG Away": 1.837627613028683, "Home GF/Home": 0.9090909090909091, "Home GA/Home": 1.363636363636364, "Away GF/Away": 1.636363636363636, "Away GA/Away": 1.363636363636364}, {"Rank": 80, "League": "Ligue1", "DateUTC (date)": "2026-01-17 16:00", "Home": "RC Lens", "Away": "AJ Auxerre", "P(BTTS)": 0.17566076004912887, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.605512640449438, "Model xG Home": 2.390625, "Model xG Away": 0.2148876404494382, "Home GF/Home": 2.0, "Home GA/Home": 0.5, "Away GF/Away": 0.5, "Away GA/Away": 2.0}, {"Rank": 81, "League": "LaLiga", "DateUTC (date)": "2026-01-19 20:00", "Home": "Elche CF", "Away": "Sevilla FC", "P(BTTS)": 0.45914217676076163, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.593118055167359, "Model xG Home": 1.792675821889305, "Model xG Away": 0.8004422332780543, "Home GF/Home": 1.7, "Home GA/Home": 0.8, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.555555555555556}, {"Rank": 82, "League": "SerieA", "DateUTC (date)": "2026-01-18 19:45", "Home": "Milan", "Away": "Lecce", "P(BTTS)": 0.38678045929480853, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.579023696682465, "Model xG Home": 1.984, "Model xG Away": 0.5950236966824645, "Home GF/Home": 1.6, "Home GA/Home": 0.9, "Away GF/Away": 0.75, "Away GA/Away": 1.5}, {"Rank": 83, "League": "Ligue1", "DateUTC (date)": "2026-01-24 16:00", "Home": "Stade Rennais FC", "Away": "FC Lorient", "P(BTTS)": 0.17498682638448518, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.568159124824438, "Model xG Home": 2.353271484375, "Model xG Away": 0.2148876404494382, "Home GF/Home": 2.25, "Home GA/Home": 1.0, "Away GF/Away": 0.25, "Away GA/Away": 1.75}, {"Rank": 84, "League": "LaLiga", "DateUTC (date)": "2026-01-18 15:15", "Home": "Atlético de Madrid", "Away": "Deportivo Alavés", "P(BTTS)": 0.2073237693378902, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.541151141918374, "Model xG Home": 2.278506034124012, "Model xG Away": 0.2626451077943616, "Home GF/Home": 2.444444444444445, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 0.375, "Away GA/Away": 1.375}, {"Rank": 85, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 15:30", "Home": "Ajax", "Away": "FC Volendam", "P(BTTS)": 0.2737287546481058, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.528696696977246, "Model xG Home": 2.158391203703704, "Model xG Away": 0.3703054932735426, "Home GF/Home": 1.625, "Home GA/Home": 0.875, "Away GF/Away": 0.625, "Away GA/Away": 2.375}, {"Rank": 86, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 17:30", "Home": "1. FC Union Berlin", "Away": "Borussia Dortmund", "P(BTTS)": 0.4828074013847078, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.492787128438332, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.538982780612245, "Home GF/Home": 1.625, "Home GA/Home": 1.375, "Away GF/Away": 1.625, "Away GA/Away": 1.0}, {"Rank": 87, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 20:00", "Home": "FC Groningen", "Away": "NAC Breda", "P(BTTS)": 0.3474125985449441, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.475835097990367, "Model xG Home": 1.957407407407407, "Model xG Away": 0.5184276905829597, "Home GF/Home": 1.75, "Home GA/Home": 0.875, "Away GF/Away": 0.875, "Away GA/Away": 2.0}, {"Rank": 88, "League": "LaLiga", "DateUTC (date)": "2026-01-18 17:30", "Home": "Celta", "Away": "Rayo Vallecano", "P(BTTS)": 0.49230565193313547, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.46361954273576, "Model xG Home": 1.410037453183521, "Model xG Away": 1.053582089552239, "Home GF/Home": 1.3, "Home GA/Home": 1.3, "Away GF/Away": 0.9, "Away GA/Away": 1.6}, {"Rank": 89, "League": "Ligue1", "DateUTC (date)": "2026-01-24 18:00", "Home": "Havre Athletic Club", "Away": "AS Monaco", "P(BTTS)": 0.49111625468730524, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.444067108497191, "Model xG Home": 1.36962890625, "Model xG Away": 1.074438202247191, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.0, "Away GF/Away": 1.25, "Away GA/Away": 1.875}, {"Rank": 90, "League": "Bundesliga", "DateUTC (date)": "2026-01-15 19:30", "Home": "FC Augsburg", "Away": "1. FC Union Berlin", "P(BTTS)": 0.49135345742854597, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.423441659272404, "Model xG Home": 1.131987577639751, "Model xG Away": 1.291454081632653, "Home GF/Home": 1.125, "Home GA/Home": 1.875, "Away GF/Away": 1.0, "Away GA/Away": 1.714285714285714}, {"Rank": 91, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "1. FC Heidenheim 1846", "Away": "1. FC Köln", "P(BTTS)": 0.47248530041341796, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.41745230700976, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.463647959183673, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.0, "Away GA/Away": 1.625}, {"Rank": 92, "League": "SerieA", "DateUTC (date)": "2026-01-18 17:00", "Home": "Torino", "Away": "Roma", "P(BTTS)": 0.3886733648422574, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.381936176935229, "Model xG Home": 0.6365333333333333, "Model xG Away": 1.745402843601896, "Home GF/Home": 1.1, "Home GA/Home": 1.8, "Away GF/Away": 1.1, "Away GA/Away": 0.7}, {"Rank": 93, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 17:30", "Home": "VfL Wolfsburg", "Away": "FC St. Pauli", "P(BTTS)": 0.4677678733957091, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.333882126220053, "Model xG Home": 1.31148097826087, "Model xG Away": 1.022401147959184, "Home GF/Home": 1.625, "Home GA/Home": 2.375, "Away GF/Away": 0.625, "Away GA/Away": 1.375}, {"Rank": 94, "League": "Ligue1", "DateUTC (date)": "2026-01-16 18:00", "Home": "AS Monaco", "Away": "FC Lorient", "P(BTTS)": 0.25928231433365767, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.33373200491573, "Model xG Home": 1.9755859375, "Model xG Away": 0.3581460674157304, "Home GF/Home": 1.888888888888889, "Home GA/Home": 1.666666666666667, "Away GF/Away": 0.25, "Away GA/Away": 1.75}, {"Rank": 95, "League": "LaLiga", "DateUTC (date)": "2026-01-10 15:15", "Home": "Villarreal CF", "Away": "Deportivo Alavés", "P(BTTS)": 0.17618097524851106, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.296493500040373, "Model xG Home": 2.07136912193092, "Model xG Away": 0.2251243781094527, "Home GF/Home": 2.222222222222222, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 0.375, "Away GA/Away": 1.375}, {"Rank": 96, "League": "SerieA", "DateUTC (date)": "2026-01-17 19:45", "Home": "Cagliari", "Away": "Juventus", "P(BTTS)": 0.4074894528503681, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.262776900122871, "Model xG Home": 0.7348148148148148, "Model xG Away": 1.527962085308057, "Home GF/Home": 1.111111111111111, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.2, "Away GA/Away": 0.8}, {"Rank": 97, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Spurs", "Away": "West Ham", "P(BTTS)": 0.4388473923844199, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.255676824946847, "Model xG Home": 1.366265060240964, "Model xG Away": 0.8894117647058825, "Home GF/Home": 1.2, "Home GA/Home": 1.2, "Away GF/Away": 0.9, "Away GA/Away": 1.8}, {"Rank": 98, "League": "SerieA", "DateUTC (date)": "2026-01-11 19:45", "Home": "Inter", "Away": "Napoli", "P(BTTS)": 0.3978576002153074, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.248324381253291, "Model xG Home": 1.543111111111111, "Model xG Away": 0.7052132701421799, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.2, "Away GA/Away": 0.7}, {"Rank": 99, "League": "SerieA", "DateUTC (date)": "2026-01-19 19:45", "Home": "Lazio", "Away": "Como", "P(BTTS)": 0.4509703958796233, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.226710900473933, "Model xG Home": 1.116, "Model xG Away": 1.110710900473934, "Home GF/Home": 1.5, "Home GA/Home": 0.9, "Away GF/Away": 1.4, "Away GA/Away": 0.9}, {"Rank": 100, "League": "LaLiga", "DateUTC (date)": "2026-01-17 15:15", "Home": "RCD Mallorca", "Away": "Athletic Club", "P(BTTS)": 0.4396912444617751, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.22270117024808, "Model xG Home": 1.28885189809035, "Model xG Away": 0.9338492721577298, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.333333333333333, "Away GF/Away": 0.7777777777777778, "Away GA/Away": 1.555555555555556}, {"Rank": 101, "League": "SerieA", "DateUTC (date)": "2026-01-14 17:30", "Home": "Napoli", "Away": "Parma", "P(BTTS)": 0.3425157961614129, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.204281200631911, "Model xG Home": 1.653333333333333, "Model xG Away": 0.5509478672985781, "Home GF/Home": 2.0, "Home GA/Home": 1.0, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 102, "League": "SerieA", "DateUTC (date)": "2026-01-10 19:45", "Home": "Atalanta", "Away": "Torino", "P(BTTS)": 0.4297623847973599, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.204183254344391, "Model xG Home": 1.322666666666666, "Model xG Away": 0.881516587677725, "Home GF/Home": 1.2, "Home GA/Home": 0.9, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.333333333333333}, {"Rank": 103, "League": "LaLiga", "DateUTC (date)": "2026-01-10 20:00", "Home": "Valencia CF", "Away": "Elche CF", "P(BTTS)": 0.3612819230794229, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.1663654263017, "Model xG Home": 1.55352684144819, "Model xG Away": 0.6128385848535103, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 0.875, "Away GA/Away": 1.875}, {"Rank": 104, "League": "Bundesliga", "DateUTC (date)": "2026-01-23 19:30", "Home": "FC St. Pauli", "Away": "Hamburger SV", "P(BTTS)": 0.3675916844590041, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.165823117179436, "Model xG Home": 1.533274179236912, "Model xG Away": 0.6325489379425239, "Home GF/Home": 1.142857142857143, "Home GA/Home": 2.142857142857143, "Away GF/Away": 0.4285714285714285, "Away GA/Away": 2.285714285714286}, {"Rank": 105, "League": "SerieA", "DateUTC (date)": "2026-01-18 14:00", "Home": "Bologna", "Away": "Fiorentina", "P(BTTS)": 0.3383488890997519, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.165091802703177, "Model xG Home": 1.616592592592593, "Model xG Away": 0.5484992101105843, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.8888888888888888, "Away GF/Away": 0.7, "Away GA/Away": 1.6}, {"Rank": 106, "League": "SerieA", "DateUTC (date)": "2026-01-12 19:45", "Home": "Juventus", "Away": "Cremonese", "P(BTTS)": 0.37841565318678194, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.082991047919958, "Model xG Home": 1.377777777777778, "Model xG Away": 0.7052132701421799, "Home GF/Home": 1.666666666666667, "Home GA/Home": 0.8888888888888888, "Away GF/Away": 0.9, "Away GA/Away": 1.0}, {"Rank": 107, "League": "Bundesliga", "DateUTC (date)": "2026-01-18 14:30", "Home": "VfB Stuttgart", "Away": "1. FC Union Berlin", "P(BTTS)": 0.3954370896431151, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.080872100392952, "Model xG Home": 1.293700088731145, "Model xG Away": 0.7871720116618075, "Home GF/Home": 1.285714285714286, "Home GA/Home": 1.142857142857143, "Away GF/Away": 1.0, "Away GA/Away": 1.714285714285714}, {"Rank": 108, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "Hamburger SV", "Away": "Borussia Mönchengladbach", "P(BTTS)": 0.4115218523999026, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.060764989225504, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.106960641399417, "Home GF/Home": 1.625, "Home GA/Home": 1.125, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.0}, {"Rank": 109, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 17:45", "Home": "PEC Zwolle", "Away": "AZ", "P(BTTS)": 0.37473978057406626, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.051697069515953, "Model xG Home": 0.7068415637860082, "Model xG Away": 1.344855505729945, "Home GF/Home": 0.875, "Home GA/Home": 1.375, "Away GF/Away": 1.444444444444444, "Away GA/Away": 1.444444444444444}, {"Rank": 110, "League": "SerieA", "DateUTC (date)": "2026-01-10 14:00", "Home": "Como", "Away": "Bologna", "P(BTTS)": 0.31371114320981064, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.029773565034229, "Model xG Home": 1.515555555555556, "Model xG Away": 0.514218009478673, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 111, "League": "SerieA", "DateUTC (date)": "2026-01-24 14:00", "Home": "Como", "Away": "Torino", "P(BTTS)": 0.24855803895684356, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 2.020631911532385, "Model xG Home": 1.653333333333333, "Model xG Away": 0.3672985781990521, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.333333333333333}, {"Rank": 112, "League": "SerieA", "DateUTC (date)": "2026-01-12 17:30", "Home": "Genoa", "Away": "Cagliari", "P(BTTS)": 0.3587021698027352, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.954968720379147, "Model xG Home": 0.6943999999999999, "Model xG Away": 1.260568720379147, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 1.1, "Away GA/Away": 1.4}, {"Rank": 113, "League": "Ligue1", "DateUTC (date)": "2026-01-17 20:05", "Home": "Angers SCO", "Away": "Olympique de Marseille", "P(BTTS)": 0.3676875203402744, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.91258394048455, "Model xG Home": 0.784423828125, "Model xG Away": 1.12816011235955, "Home GF/Home": 1.5, "Home GA/Home": 0.875, "Away GF/Away": 1.5, "Away GA/Away": 0.875}, {"Rank": 114, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Sunderland", "Away": "Crystal Palace", "P(BTTS)": 0.36692864132002545, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.903841247342311, "Model xG Home": 1.113253012048193, "Model xG Away": 0.7905882352941177, "Home GF/Home": 1.6, "Home GA/Home": 0.8, "Away GF/Away": 1.2, "Away GA/Away": 1.1}, {"Rank": 115, "League": "LaLiga", "DateUTC (date)": "2026-01-18 13:00", "Home": "Getafe CF", "Away": "Valencia CF", "P(BTTS)": 0.2774880333153961, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.90020714157055, "Model xG Home": 1.449958385351644, "Model xG Away": 0.4502487562189055, "Home GF/Home": 0.875, "Home GA/Home": 0.75, "Away GF/Away": 0.6666666666666666, "Away GA/Away": 2.444444444444445}, {"Rank": 116, "League": "SerieA", "DateUTC (date)": "2026-01-10 17:00", "Home": "Roma", "Away": "Sassuolo", "P(BTTS)": 0.3400340225197852, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.887872369473212, "Model xG Home": 1.234897119341564, "Model xG Away": 0.6529752501316481, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.5555555555555556, "Away GF/Away": 1.333333333333333, "Away GA/Away": 1.222222222222222}, {"Rank": 117, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "1. FSV Mainz 05", "Away": "VfL Wolfsburg", "P(BTTS)": 0.2788391512237633, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.824613385726962, "Model xG Home": 0.4716614906832298, "Model xG Away": 1.352951895043732, "Home GF/Home": 0.625, "Home GA/Home": 1.375, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.285714285714286}, {"Rank": 118, "League": "EPL", "DateUTC (date)": "2026-01-24 12:30", "Home": "West Ham", "Away": "Sunderland", "P(BTTS)": 0.35165232393450013, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.802162466101646, "Model xG Home": 0.9514089415513294, "Model xG Away": 0.8507535245503162, "Home GF/Home": 1.181818181818182, "Home GA/Home": 2.272727272727273, "Away GF/Away": 0.4545454545454545, "Away GA/Away": 1.272727272727273}, {"Rank": 119, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "Borussia Dortmund", "Away": "FC St. Pauli", "P(BTTS)": 0.16935603301290086, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.744826657371023, "Model xG Home": 1.498835403726708, "Model xG Away": 0.2459912536443148, "Home GF/Home": 1.857142857142857, "Home GA/Home": 0.5714285714285714, "Away GF/Away": 0.625, "Away GA/Away": 1.375}, {"Rank": 120, "League": "EPL", "DateUTC (date)": "2026-01-18 16:30", "Home": "Aston Villa", "Away": "Everton", "P(BTTS)": 0.30403844735744784, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.731495393338058, "Model xG Home": 1.13855421686747, "Model xG Away": 0.5929411764705883, "Home GF/Home": 1.8, "Home GA/Home": 0.8, "Away GF/Away": 0.9, "Away GA/Away": 1.0}, {"Rank": 121, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "1. FSV Mainz 05", "Away": "1. FC Heidenheim 1846", "P(BTTS)": 0.2899032622789814, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.567392096590189, "Model xG Home": 0.890916149068323, "Model xG Away": 0.6764759475218659, "Home GF/Home": 0.625, "Home GA/Home": 1.375, "Away GF/Away": 0.7142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 122, "League": "LaLiga", "DateUTC (date)": "2026-01-24 15:15", "Home": "Valencia CF", "Away": "RCD Espanyol de Barcelona", "P(BTTS)": 0.2811496170308642, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.512914516058907, "Model xG Home": 0.7249791926758221, "Model xG Away": 0.7879353233830846, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 1.125, "Away GA/Away": 0.875}, {"Rank": 123, "League": "LaLiga", "DateUTC (date)": "2026-01-10 13:00", "Home": "Real Oviedo", "Away": "Real Betis", "P(BTTS)": 0.13798588126528194, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.440496228801892, "Model xG Home": 0.2175983724048643, "Model xG Away": 1.222897856397027, "Home GF/Home": 0.2222222222222222, "Home GA/Home": 1.111111111111111, "Away GF/Away": 1.222222222222222, "Away GA/Away": 1.444444444444444}, {"Rank": 124, "League": "SerieA", "DateUTC (date)": "2026-01-11 17:00", "Home": "Hellas Verona", "Away": "Lazio", "P(BTTS)": 0.24676207211641563, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.377560119361067, "Model xG Home": 0.642962962962963, "Model xG Away": 0.7345971563981042, "Home GF/Home": 1.0, "Home GA/Home": 1.5, "Away GF/Away": 0.5555555555555556, "Away GA/Away": 0.7777777777777778}, {"Rank": 125, "League": "LaLiga", "DateUTC (date)": "2026-01-10 17:30", "Home": "Girona FC", "Away": "CA Osasuna", "P(BTTS)": 0.2389784233889557, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.370420059502736, "Model xG Home": 0.8034401442641144, "Model xG Away": 0.5669799152386217, "Home GF/Home": 0.8888888888888888, "Home GA/Home": 1.888888888888889, "Away GF/Away": 0.3333333333333333, "Away GA/Away": 1.333333333333333}, {"Rank": 126, "League": "SerieA", "DateUTC (date)": "2026-01-15 19:45", "Home": "Como", "Away": "Milan", "P(BTTS)": 0.22413294939232595, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.312174170616114, "Model xG Home": 0.775, "Model xG Away": 0.5371741706161137, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.625, "Away GA/Away": 0.625}, {"Rank": 127, "League": "LaLiga", "DateUTC (date)": "2026-01-11 13:00", "Home": "Rayo Vallecano", "Away": "RCD Mallorca", "P(BTTS)": 0.21797691088717447, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.268959509568264, "Model xG Home": 0.7061485642946318, "Model xG Away": 0.5628109452736318, "Home GF/Home": 0.625, "Home GA/Home": 0.625, "Away GF/Away": 1.0, "Away GA/Away": 1.666666666666667}, {"Rank": 128, "League": "SerieA", "DateUTC (date)": "2026-01-11 11:30", "Home": "Lecce", "Away": "Parma", "P(BTTS)": 0.1999810495074935, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.212232227488152, "Model xG Home": 0.4959999999999999, "Model xG Away": 0.7162322274881516, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 129, "League": "SerieA", "DateUTC (date)": "2026-01-16 19:45", "Home": "Pisa", "Away": "Atalanta", "P(BTTS)": 0.05787959330030371, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.169261014569071, "Model xG Home": 0.09185185185185185, "Model xG Away": 1.07740916271722, "Home GF/Home": 0.1, "Home GA/Home": 1.0, "Away GF/Away": 1.222222222222222, "Away GA/Away": 1.111111111111111}, {"Rank": 130, "League": "SerieA", "DateUTC (date)": "2026-01-24 19:45", "Home": "Lecce", "Away": "Lazio", "P(BTTS)": 0.15073728643739898, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.022428646656135, "Model xG Home": 0.3857777777777778, "Model xG Away": 0.6366508688783571, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 0.5555555555555556, "Away GA/Away": 0.7777777777777778}, {"Rank": 131, "League": "Eredivisie", "DateUTC (date)": "2026-01-16 19:00", "Home": "Excelsior Rotterdam", "Away": "Telstar", "P(BTTS)": 0.14695007366064605, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 0.9673485393714591, "Model xG Home": 0.497119341563786, "Model xG Away": 0.4702291978076731, "Home GF/Home": 0.8888888888888888, "Home GA/Home": 1.111111111111111, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 132, "League": "LaLiga", "DateUTC (date)": "2026-01-24 13:00", "Home": "Rayo Vallecano", "Away": "CA Osasuna", "P(BTTS)": 0.07382704444017035, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 0.7525224998602492, "Model xG Home": 0.5649188514357053, "Model xG Away": 0.1876036484245439, "Home GF/Home": 0.625, "Home GA/Home": 0.625, "Away GF/Away": 0.3333333333333333, "Away GA/Away": 1.333333333333333}, {"Rank": 133, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 00:00", "Home": "M'gladbach", "Away": "Augsburg", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 134, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Bayern Munich", "Away": "Wolfsburg", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 135, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Levadeiakos", "Away": "Volos NFC", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 136, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "OFI Crete", "Away": "Asteras Tripolis", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 137, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Aris", "Away": "AEK", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 138, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Panathinaikos", "Away": "Panserraikos", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 139, "League": "SerieA", "DateUTC (date)": "2026-01-11 00:00", "Home": "Verona", "Away": "Lazio", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 140, "League": "SerieB", "DateUTC (date)": "2026-01-11 00:00", "Home": "Mantova", "Away": "Palermo", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 141, "League": "SerieB", "DateUTC (date)": "2026-01-11 00:00", "Home": "Padova", "Away": "Modena", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 142, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Heerenveen", "Away": "Feyenoord", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 143, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Go Ahead Eagles", "Away": "For Sittard", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 144, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Sparta Rotterdam", "Away": "Heracles", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 145, "League": "PrimeiraLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Nacional", "Away": "Santa Clara", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 146, "League": "PrimeiraLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Moreirense", "Away": "Tondela", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 147, "League": "ScotPrem", "DateUTC (date)": "2026-01-11 00:00", "Home": "Dundee", "Away": "Hearts", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 148, "League": "ScotPrem", "DateUTC (date)": "2026-01-11 00:00", "Home": "Aberdeen", "Away": "Rangers", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 149, "League": "LaLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Vallecano", "Away": "Mallorca", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 150, "League": "LaLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Levante", "Away": "Espanol", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 151, "League": "LaLiga", "DateUTC (date)": "2026-01-12 00:00", "Home": "Sevilla", "Away": "Celta", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 152, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Leganes", "Away": "Valladolid", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 153, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Granada", "Away": "Castellon", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 154, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Malaga", "Away": "Ceuta", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 155, "League": "LaLiga2", "DateUTC (date)": "2026-01-12 00:00", "Home": "Huesca", "Away": "Cordoba", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 156, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Club Leon", "Away": "Cruz Azul", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 157, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Santos Laguna", "Away": "Necaxa", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 158, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Monterrey", "Away": "Toluca", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 159, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "UNAM Pumas", "Away": "Queretaro", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 160, "League": "LigaMX", "DateUTC (date)": "2026-01-12 00:00", "Home": "Atl. San Luis", "Away": "Tigres UANL", "P(BTTS)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}], "probCol": "P(BTTS)"}, {"name": "Over 1.5", "slug": "over15", "columns": ["Rank", "League", "DateUTC (date)", "Home", "Away", "P(Over1.5)", "Pick", "Strength", "Model xG Total", "Model xG Home", "Model xG Away", "Home GF/Home", "Home GA/Home", "Away GF/Away", "Away GA/Away"], "rows": [{"Rank": 1, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 17:45", "Home": "N.E.C. Nijmegen", "Away": "PEC Zwolle", "P(Over1.5)": 0.9877425012268206, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 6.403581215744893, "Model xG Home": 4.823611111111111, "Model xG Away": 1.579970104633782, "Home GF/Home": 2.875, "Home GA/Home": 1.5, "Away GF/Away": 1.555555555555556, "Away GA/Away": 3.0}, {"Rank": 2, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 19:00", "Home": "PSV", "Away": "Excelsior Rotterdam", "P(Over1.5)": 0.9770355718694226, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 5.67168066529053, "Model xG Home": 4.414153439153439, "Model xG Away": 1.257527226137092, "Home GF/Home": 3.25, "Home GA/Home": 1.625, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 3, "League": "SerieA", "DateUTC (date)": "2026-01-23 19:45", "Home": "Inter", "Away": "Pisa", "P(Over1.5)": 0.9655803238518678, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 5.192459189046867, "Model xG Home": 4.408888888888889, "Model xG Away": 0.7835703001579778, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.333333333333333, "Away GA/Away": 2.0}, {"Rank": 4, "League": "LaLiga", "DateUTC (date)": "2026-01-18 20:00", "Home": "Real Sociedad", "Away": "FC Barcelona", "P(Over1.5)": 0.9585743749621942, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.970723784324321, "Model xG Home": 1.468789013732834, "Model xG Away": 3.501934770591487, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 2.5, "Away GA/Away": 1.5}, {"Rank": 5, "League": "EPL", "DateUTC (date)": "2026-01-19 20:00", "Home": "Brighton", "Away": "Bournemouth", "P(Over1.5)": 0.9572320964981047, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.93239546420978, "Model xG Home": 3.301807228915663, "Model xG Away": 1.630588235294118, "Home GF/Home": 1.8, "Home GA/Home": 1.1, "Away GF/Away": 1.8, "Away GA/Away": 2.9}, {"Rank": 6, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "TSG Hoffenheim", "Away": "Bayer 04 Leverkusen", "P(Over1.5)": 0.953626234335617, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.834874056099813, "Model xG Home": 2.515527950310559, "Model xG Away": 2.319346105789254, "Home GF/Home": 2.142857142857143, "Home GA/Home": 1.571428571428571, "Away GF/Away": 2.142857142857143, "Away GA/Away": 2.0}, {"Rank": 7, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "FC Bayern München", "Away": "FC Augsburg", "P(Over1.5)": 0.9528318925952545, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.81436969197617, "Model xG Home": 4.223990683229814, "Model xG Away": 0.5903790087463556, "Home GF/Home": 3.875, "Home GA/Home": 0.75, "Away GF/Away": 1.142857142857143, "Away GA/Away": 1.857142857142857}, {"Rank": 8, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 13:30", "Home": "Telstar", "Away": "Ajax", "P(Over1.5)": 0.9516860147891485, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.785365803022755, "Model xG Home": 1.747685185185185, "Model xG Away": 3.037680617837569, "Home GF/Home": 1.666666666666667, "Home GA/Home": 2.111111111111111, "Away GF/Away": 2.125, "Away GA/Away": 1.875}, {"Rank": 9, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 19:00", "Home": "PSV", "Away": "NAC Breda", "P(Over1.5)": 0.9436162196566464, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.597979467696396, "Model xG Home": 3.635185185185185, "Model xG Away": 0.9627942825112108, "Home GF/Home": 3.25, "Home GA/Home": 1.625, "Away GF/Away": 0.875, "Away GA/Away": 2.0}, {"Rank": 10, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "1. FC Köln", "Away": "FC Bayern München", "P(Over1.5)": 0.9413261950194816, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.549463086032993, "Model xG Home": 0.8385093167701864, "Model xG Away": 3.710953769262807, "Home GF/Home": 2.0, "Home GA/Home": 1.571428571428571, "Away GF/Away": 3.428571428571428, "Away GA/Away": 0.7142857142857143}, {"Rank": 11, "League": "Bundesliga", "DateUTC (date)": "2026-01-16 19:30", "Home": "SV Werder Bremen", "Away": "Eintracht Frankfurt", "P(Over1.5)": 0.9346453565871302, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.417575104575992, "Model xG Home": 1.760869565217391, "Model xG Away": 2.6567055393586, "Home GF/Home": 1.142857142857143, "Home GA/Home": 1.714285714285714, "Away GF/Away": 2.25, "Away GA/Away": 2.625}, {"Rank": 12, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 15:30", "Home": "AZ", "Away": "FC Volendam", "P(Over1.5)": 0.929379333799218, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.322346786248132, "Model xG Home": 3.415476190476191, "Model xG Away": 0.906870595771941, "Home GF/Home": 2.571428571428572, "Home GA/Home": 2.142857142857143, "Away GF/Away": 0.625, "Away GA/Away": 2.375}, {"Rank": 13, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 13:30", "Home": "Heracles Almelo", "Away": "FC Twente", "P(Over1.5)": 0.9282562687683562, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.302910646072081, "Model xG Home": 1.537962962962963, "Model xG Away": 2.764947683109118, "Home GF/Home": 2.25, "Home GA/Home": 2.625, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 14, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "RB Leipzig", "Away": "Sport-Club Freiburg", "P(Over1.5)": 0.9218497780639938, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.197252503485867, "Model xG Home": 3.385481366459627, "Model xG Away": 0.811771137026239, "Home GF/Home": 2.714285714285714, "Home GA/Home": 0.8571428571428571, "Away GF/Away": 1.375, "Away GA/Away": 2.125}, {"Rank": 15, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 11:15", "Home": "sc Heerenveen", "Away": "Feyenoord", "P(Over1.5)": 0.9182969359730662, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 4.142131446188341, "Model xG Home": 1.1796875, "Model xG Away": 2.962443946188341, "Home GF/Home": 1.875, "Home GA/Home": 1.75, "Away GF/Away": 2.5, "Away GA/Away": 1.125}, {"Rank": 16, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 17:45", "Home": "FC Twente", "Away": "PEC Zwolle", "P(Over1.5)": 0.89541730848762, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.833308420528152, "Model xG Home": 2.516666666666667, "Model xG Away": 1.316641753861485, "Home GF/Home": 1.5, "Home GA/Home": 1.25, "Away GF/Away": 1.555555555555556, "Away GA/Away": 3.0}, {"Rank": 17, "League": "Ligue1", "DateUTC (date)": "2026-01-18 14:00", "Home": "RC Strasbourg Alsace", "Away": "FC Metz", "P(Over1.5)": 0.8908373895414279, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.779187148876404, "Model xG Home": 3.25390625, "Model xG Away": 0.5252808988764045, "Home GF/Home": 1.75, "Home GA/Home": 0.5, "Away GF/Away": 1.222222222222222, "Away GA/Away": 3.111111111111111}, {"Rank": 18, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "1. FC Köln", "Away": "1. FSV Mainz 05", "P(Over1.5)": 0.8885120879495941, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.752512540064828, "Model xG Home": 2.515527950310559, "Model xG Away": 1.236984589754269, "Home GF/Home": 2.0, "Home GA/Home": 1.571428571428571, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.142857142857143}, {"Rank": 19, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 17:30", "Home": "VfB Stuttgart", "Away": "Eintracht Frankfurt", "P(Over1.5)": 0.8884771130017318, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.752115287108632, "Model xG Home": 1.980978260869565, "Model xG Away": 1.771137026239067, "Home GF/Home": 1.285714285714286, "Home GA/Home": 1.142857142857143, "Away GF/Away": 2.25, "Away GA/Away": 2.625}, {"Rank": 20, "League": "SerieA", "DateUTC (date)": "2026-01-14 19:45", "Home": "Inter", "Away": "Lecce", "P(Over1.5)": 0.8880633959298645, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.747424960505529, "Model xG Home": 3.306666666666667, "Model xG Away": 0.4407582938388625, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 0.75, "Away GA/Away": 1.5}, {"Rank": 21, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 19:00", "Home": "Fortuna Sittard", "Away": "PSV", "P(Over1.5)": 0.8846493453110561, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.709322720273282, "Model xG Home": 0.8837677183356195, "Model xG Away": 2.825555001937663, "Home GF/Home": 1.777777777777778, "Home GA/Home": 1.444444444444444, "Away GF/Away": 2.888888888888889, "Away GA/Away": 0.8888888888888888}, {"Rank": 22, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 16:30", "Home": "FC Bayern München", "Away": "VfL Wolfsburg", "P(Over1.5)": 0.8803005757123081, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.66227500316897, "Model xG Home": 2.924301242236025, "Model xG Away": 0.7379737609329445, "Home GF/Home": 3.875, "Home GA/Home": 0.75, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.285714285714286}, {"Rank": 23, "League": "LaLiga", "DateUTC (date)": "2026-01-17 20:00", "Home": "Real Betis", "Away": "Villarreal CF", "P(Over1.5)": 0.8763435784216832, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.620820678132434, "Model xG Home": 1.694756554307116, "Model xG Away": 1.926064123825318, "Home GF/Home": 2.0, "Home GA/Home": 1.222222222222222, "Away GF/Away": 1.75, "Away GA/Away": 1.25}, {"Rank": 24, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "Hamburger SV", "Away": "Bayer 04 Leverkusen", "P(Over1.5)": 0.8711315696255787, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.568049657751299, "Model xG Home": 1.907608695652174, "Model xG Away": 1.660440962099125, "Home GF/Home": 1.625, "Home GA/Home": 1.125, "Away GF/Away": 2.142857142857143, "Away GA/Away": 2.0}, {"Rank": 25, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "VfL Wolfsburg", "Away": "1. FC Heidenheim 1846", "P(Over1.5)": 0.862500847199225, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.484840442388135, "Model xG Home": 2.316381987577639, "Model xG Away": 1.168458454810495, "Home GF/Home": 1.625, "Home GA/Home": 2.375, "Away GF/Away": 0.7142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 26, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Liverpool", "Away": "Burnley", "P(Over1.5)": 0.8592897737442587, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.455102763997166, "Model xG Home": 2.466867469879519, "Model xG Away": 0.9882352941176471, "Home GF/Home": 1.5, "Home GA/Home": 1.0, "Away GF/Away": 1.2, "Away GA/Away": 2.6}, {"Rank": 27, "League": "Ligue1", "DateUTC (date)": "2026-01-17 18:00", "Home": "Toulouse FC", "Away": "OGC Nice", "P(Over1.5)": 0.8564008880094562, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.428875526685393, "Model xG Home": 2.091796875, "Model xG Away": 1.337078651685393, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.0, "Away GA/Away": 2.25}, {"Rank": 28, "League": "Ligue1", "DateUTC (date)": "2026-01-16 20:00", "Home": "Paris Saint-Germain", "Away": "LOSC Lille", "P(Over1.5)": 0.8528488230829969, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.397281260972612, "Model xG Home": 2.4840087890625, "Model xG Away": 0.9132724719101123, "Home GF/Home": 2.375, "Home GA/Home": 0.5, "Away GF/Away": 2.125, "Away GA/Away": 1.75}, {"Rank": 29, "League": "SerieA", "DateUTC (date)": "2026-01-10 14:00", "Home": "Udinese", "Away": "Pisa", "P(Over1.5)": 0.8475086529791345, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.351068983675618, "Model xG Home": 1.653333333333333, "Model xG Away": 1.697735650342285, "Home GF/Home": 1.0, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.333333333333333, "Away GA/Away": 2.0}, {"Rank": 30, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 17:30", "Home": "Bayer 04 Leverkusen", "Away": "VfB Stuttgart", "P(Over1.5)": 0.846712322319221, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.344304569653949, "Model xG Home": 2.311141304347826, "Model xG Away": 1.033163265306122, "Home GF/Home": 2.25, "Home GA/Home": 0.75, "Away GF/Away": 2.0, "Away GA/Away": 1.75}, {"Rank": 31, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 11:15", "Home": "sc Heerenveen", "Away": "FC Groningen", "P(Over1.5)": 0.8454131583796332, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.333337225959143, "Model xG Home": 1.703993055555556, "Model xG Away": 1.629344170403587, "Home GF/Home": 1.875, "Home GA/Home": 1.75, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 32, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "Bayer 04 Leverkusen", "Away": "SV Werder Bremen", "P(Over1.5)": 0.8398167616317133, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.287031388642413, "Model xG Home": 2.641304347826087, "Model xG Away": 0.6457270408163265, "Home GF/Home": 2.25, "Home GA/Home": 0.75, "Away GF/Away": 1.25, "Away GA/Away": 2.0}, {"Rank": 33, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 15:45", "Home": "Feyenoord", "Away": "Sparta Rotterdam", "P(Over1.5)": 0.8335890803215857, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.237197124877742, "Model xG Home": 2.221502057613169, "Model xG Away": 1.015695067264574, "Home GF/Home": 2.444444444444445, "Home GA/Home": 1.333333333333333, "Away GF/Away": 1.125, "Away GA/Away": 1.625}, {"Rank": 34, "League": "SerieA", "DateUTC (date)": "2026-01-17 17:00", "Home": "Napoli", "Away": "Sassuolo", "P(Over1.5)": 0.8282888503296089, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.196096190977707, "Model xG Home": 2.020740740740741, "Model xG Away": 1.175355450236967, "Home GF/Home": 2.0, "Home GA/Home": 1.0, "Away GF/Away": 1.333333333333333, "Away GA/Away": 1.222222222222222}, {"Rank": 35, "League": "Ligue1", "DateUTC (date)": "2026-01-24 20:05", "Home": "Olympique de Marseille", "Away": "RC Lens", "P(Over1.5)": 0.826899281793315, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.185510299625468, "Model xG Home": 1.59375, "Model xG Away": 1.591760299625468, "Home GF/Home": 2.666666666666667, "Home GA/Home": 1.111111111111111, "Away GF/Away": 1.666666666666667, "Away GA/Away": 1.0}, {"Rank": 36, "League": "LaLiga", "DateUTC (date)": "2026-01-23 20:00", "Home": "Levante UD", "Away": "Elche CF", "P(Over1.5)": 0.8267825650036478, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.184624629660686, "Model xG Home": 1.271067415730337, "Model xG Away": 1.913557213930348, "Home GF/Home": 1.0, "Home GA/Home": 2.428571428571428, "Away GF/Away": 0.875, "Away GA/Away": 1.875}, {"Rank": 37, "League": "SerieA", "DateUTC (date)": "2026-01-24 17:00", "Home": "Fiorentina", "Away": "Cagliari", "P(Over1.5)": 0.8261820820369977, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.180076531507811, "Model xG Home": 1.671703703703704, "Model xG Away": 1.508372827804107, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.1, "Away GA/Away": 1.4}, {"Rank": 38, "League": "EPL", "DateUTC (date)": "2026-01-17 12:30", "Home": "Man Utd", "Away": "Man City", "P(Over1.5)": 0.8261016569446619, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.179468462083629, "Model xG Home": 1.252409638554217, "Model xG Away": 1.927058823529412, "Home GF/Home": 1.8, "Home GA/Home": 1.3, "Away GF/Away": 1.8, "Away GA/Away": 1.1}, {"Rank": 39, "League": "Bundesliga", "DateUTC (date)": "2026-01-18 16:30", "Home": "FC Augsburg", "Away": "Sport-Club Freiburg", "P(Over1.5)": 0.8260320377114742, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.178942297027507, "Model xG Home": 1.403192934782609, "Model xG Away": 1.775749362244898, "Home GF/Home": 1.125, "Home GA/Home": 1.875, "Away GF/Away": 1.375, "Away GA/Away": 2.125}, {"Rank": 40, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 17:30", "Home": "RB Leipzig", "Away": "FC Bayern München", "P(Over1.5)": 0.8237947412204982, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.162133531318472, "Model xG Home": 1.137976929902396, "Model xG Away": 2.024156601416076, "Home GF/Home": 2.714285714285714, "Home GA/Home": 0.8571428571428571, "Away GF/Away": 3.428571428571428, "Away GA/Away": 0.7142857142857143}, {"Rank": 41, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "1. FC Union Berlin", "Away": "1. FSV Mainz 05", "P(Over1.5)": 0.8189286830654285, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.126227975662315, "Model xG Home": 2.043866459627329, "Model xG Away": 1.082361516034985, "Home GF/Home": 1.625, "Home GA/Home": 1.375, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.142857142857143}, {"Rank": 42, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "FC St. Pauli", "Away": "RB Leipzig", "P(Over1.5)": 0.8180021847599102, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.11948995436684, "Model xG Home": 1.090062111801242, "Model xG Away": 2.029427842565597, "Home GF/Home": 1.142857142857143, "Home GA/Home": 2.142857142857143, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 43, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Leeds", "Away": "Fulham", "P(Over1.5)": 0.8171319696896038, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.113189227498228, "Model xG Home": 1.935542168674699, "Model xG Away": 1.17764705882353, "Home GF/Home": 1.8, "Home GA/Home": 1.3, "Away GF/Away": 1.1, "Away GA/Away": 1.7}, {"Rank": 44, "League": "SerieA", "DateUTC (date)": "2026-01-17 14:00", "Home": "Udinese", "Away": "Inter", "P(Over1.5)": 0.8139411787018278, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.09031420045638, "Model xG Home": 0.8266666666666667, "Model xG Away": 2.263647533789714, "Home GF/Home": 1.0, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.777777777777778, "Away GA/Away": 1.0}, {"Rank": 45, "League": "SerieA", "DateUTC (date)": "2026-01-15 17:30", "Home": "Hellas Verona", "Away": "Bologna", "P(Over1.5)": 0.81067254168313, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.067242408285062, "Model xG Home": 1.01037037037037, "Model xG Away": 2.056872037914692, "Home GF/Home": 1.0, "Home GA/Home": 1.5, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 46, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "Sport-Club Freiburg", "Away": "Hamburger SV", "P(Over1.5)": 0.8100314664694513, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.06275917643011, "Model xG Home": 2.683229813664596, "Model xG Away": 0.3795293627655144, "Home GF/Home": 2.0, "Home GA/Home": 1.285714285714286, "Away GF/Away": 0.4285714285714285, "Away GA/Away": 2.285714285714286}, {"Rank": 47, "League": "LaLiga", "DateUTC (date)": "2026-01-11 15:15", "Home": "Levante UD", "Away": "RCD Espanyol de Barcelona", "P(Over1.5)": 0.8086944935770288, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.053452640489367, "Model xG Home": 0.5931647940074907, "Model xG Away": 2.460287846481876, "Home GF/Home": 1.0, "Home GA/Home": 2.428571428571428, "Away GF/Away": 1.125, "Away GA/Away": 0.875}, {"Rank": 48, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 20:00", "Home": "FC Twente", "Away": "Excelsior Rotterdam", "P(Over1.5)": 0.8015422356251856, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 3.004630222791658, "Model xG Home": 2.037301587301587, "Model xG Away": 0.9673286354900703, "Home GF/Home": 1.5, "Home GA/Home": 1.25, "Away GF/Away": 1.142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 49, "League": "LaLiga", "DateUTC (date)": "2026-01-12 20:00", "Home": "Sevilla FC", "Away": "Celta", "P(Over1.5)": 0.7988022804413745, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.986340923348303, "Model xG Home": 0.9227007906783189, "Model xG Away": 2.063640132669984, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.666666666666667, "Away GF/Away": 1.375, "Away GA/Away": 0.875}, {"Rank": 50, "League": "SerieA", "DateUTC (date)": "2026-01-11 14:00", "Home": "Fiorentina", "Away": "Milan", "P(Over1.5)": 0.7970217969689141, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.974574337370545, "Model xG Home": 0.7462962962962962, "Model xG Away": 2.228278041074249, "Home GF/Home": 1.444444444444444, "Home GA/Home": 1.555555555555556, "Away GF/Away": 1.625, "Away GA/Away": 0.625}, {"Rank": 51, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "1. FC Heidenheim 1846", "Away": "RB Leipzig", "P(Over1.5)": 0.7957644931156598, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.966320291703638, "Model xG Home": 0.9538043478260869, "Model xG Away": 2.012515943877551, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.375, "Away GA/Away": 1.625}, {"Rank": 52, "League": "Ligue1", "DateUTC (date)": "2026-01-23 19:00", "Home": "AJ Auxerre", "Away": "Paris Saint-Germain", "P(Over1.5)": 0.7874363216090415, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.912755539950063, "Model xG Home": 0.8116319444444445, "Model xG Away": 2.101123595505618, "Home GF/Home": 1.111111111111111, "Home GA/Home": 1.222222222222222, "Away GF/Away": 2.0, "Away GA/Away": 1.222222222222222}, {"Rank": 53, "League": "LaLiga", "DateUTC (date)": "2026-01-24 20:00", "Home": "Villarreal CF", "Away": "Real Madrid", "P(Over1.5)": 0.7785752096067751, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.857758647461817, "Model xG Home": 1.657095297544736, "Model xG Away": 1.200663349917081, "Home GF/Home": 2.222222222222222, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 2.0, "Away GA/Away": 1.1}, {"Rank": 54, "League": "Ligue1", "DateUTC (date)": "2026-01-18 16:15", "Home": "FC Nantes", "Away": "Paris FC", "P(Over1.5)": 0.7778313480342683, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.853230337078652, "Model xG Home": 1.0625, "Model xG Away": 1.790730337078652, "Home GF/Home": 1.0, "Home GA/Home": 1.875, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.777777777777778}, {"Rank": 55, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Fulham", "Away": "Brighton", "P(Over1.5)": 0.7754310160633143, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.838708260362793, "Model xG Home": 1.688489495170766, "Model xG Away": 1.150218765192027, "Home GF/Home": 1.727272727272727, "Home GA/Home": 1.181818181818182, "Away GF/Away": 1.181818181818182, "Away GA/Away": 1.545454545454545}, {"Rank": 56, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "SV Werder Bremen", "Away": "TSG Hoffenheim", "P(Over1.5)": 0.7724707995003623, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.820984915705413, "Model xG Home": 0.7546583850931676, "Model xG Away": 2.066326530612245, "Home GF/Home": 1.142857142857143, "Home GA/Home": 1.714285714285714, "Away GF/Away": 1.75, "Away GA/Away": 1.125}, {"Rank": 57, "League": "Ligue1", "DateUTC (date)": "2026-01-18 19:45", "Home": "Olympique Lyonnais", "Away": "Stade Brestois 29", "P(Over1.5)": 0.7718077289000079, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.817042661516854, "Model xG Home": 2.091796875, "Model xG Away": 0.7252457865168539, "Home GF/Home": 1.75, "Home GA/Home": 0.75, "Away GF/Away": 1.125, "Away GA/Away": 2.0}, {"Rank": 58, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Man City", "Away": "Wolves", "P(Over1.5)": 0.7710950570890138, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.812816653097563, "Model xG Home": 2.540575525241462, "Model xG Away": 0.2722411278561012, "Home GF/Home": 2.454545454545455, "Home GA/Home": 0.7272727272727273, "Away GF/Away": 0.4545454545454545, "Away GA/Away": 1.636363636363636}, {"Rank": 59, "League": "LaLiga", "DateUTC (date)": "2026-01-24 17:30", "Home": "Sevilla FC", "Away": "Athletic Club", "P(Over1.5)": 0.7702242575031557, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.807668551403062, "Model xG Home": 1.6403569612059, "Model xG Away": 1.167311590197162, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.666666666666667, "Away GF/Away": 0.7777777777777778, "Away GA/Away": 1.555555555555556}, {"Rank": 60, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 19:30", "Home": "TSG Hoffenheim", "Away": "Borussia Mönchengladbach", "P(Over1.5)": 0.7696010615723953, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.803994712348115, "Model xG Home": 1.257763975155279, "Model xG Away": 1.546230737192836, "Home GF/Home": 2.142857142857143, "Home GA/Home": 1.571428571428571, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.0}, {"Rank": 61, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Chelsea", "Away": "Brentford", "P(Over1.5)": 0.7680502869004671, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.794890148830617, "Model xG Home": 1.707831325301205, "Model xG Away": 1.087058823529412, "Home GF/Home": 1.5, "Home GA/Home": 1.1, "Away GF/Away": 1.2, "Away GA/Away": 1.8}, {"Rank": 62, "League": "Ligue1", "DateUTC (date)": "2026-01-18 16:15", "Home": "Stade Rennais FC", "Away": "Havre Athletic Club", "P(Over1.5)": 0.766019396420251, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.783046765273876, "Model xG Home": 2.353271484375, "Model xG Away": 0.4297752808988764, "Home GF/Home": 2.25, "Home GA/Home": 1.0, "Away GF/Away": 0.5, "Away GA/Away": 1.75}, {"Rank": 63, "League": "EPL", "DateUTC (date)": "2026-01-24 17:30", "Home": "Bournemouth", "Away": "Liverpool", "P(Over1.5)": 0.7651930616595153, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.778253509907398, "Model xG Home": 1.505526237180125, "Model xG Away": 1.272727272727273, "Home GF/Home": 1.454545454545455, "Home GA/Home": 1.0, "Away GF/Away": 1.545454545454545, "Away GA/Away": 1.636363636363636}, {"Rank": 64, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 15:30", "Home": "Ajax", "Away": "Go Ahead Eagles", "P(Over1.5)": 0.7645246606763765, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.774387098857702, "Model xG Home": 1.918569958847737, "Model xG Away": 0.8558171400099651, "Home GF/Home": 1.625, "Home GA/Home": 0.875, "Away GF/Away": 1.444444444444444, "Away GA/Away": 2.111111111111111}, {"Rank": 65, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 13:30", "Home": "Go Ahead Eagles", "Away": "Fortuna Sittard", "P(Over1.5)": 0.763730691394737, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.769806718153131, "Model xG Home": 1.817592592592593, "Model xG Away": 0.9522141255605381, "Home GF/Home": 1.625, "Home GA/Home": 1.25, "Away GF/Away": 1.125, "Away GA/Away": 2.0}, {"Rank": 66, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 14:30", "Home": "Borussia Mönchengladbach", "Away": "FC Augsburg", "P(Over1.5)": 0.7625120930170171, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.762802636582583, "Model xG Home": 1.090062111801242, "Model xG Away": 1.672740524781341, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.142857142857143, "Away GA/Away": 1.857142857142857}, {"Rank": 67, "League": "LaLiga", "DateUTC (date)": "2026-01-16 20:00", "Home": "RCD Espanyol de Barcelona", "Away": "Girona FC", "P(Over1.5)": 0.7594297145679809, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.745224563822585, "Model xG Home": 1.664627548897212, "Model xG Away": 1.080597014925373, "Home GF/Home": 1.3, "Home GA/Home": 1.2, "Away GF/Away": 1.0, "Away GA/Away": 1.888888888888889}, {"Rank": 68, "League": "LaLiga", "DateUTC (date)": "2026-01-17 17:30", "Home": "CA Osasuna", "Away": "Real Oviedo", "P(Over1.5)": 0.7575267220980633, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.734469558160095, "Model xG Home": 2.134137883201554, "Model xG Away": 0.6003316749585407, "Home GF/Home": 1.666666666666667, "Home GA/Home": 1.0, "Away GF/Away": 0.6666666666666666, "Away GA/Away": 1.888888888888889}, {"Rank": 69, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 20:00", "Home": "NAC Breda", "Away": "N.E.C. Nijmegen", "P(Over1.5)": 0.7564300303215098, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.72830463747255, "Model xG Home": 1.056378600823045, "Model xG Away": 1.671926036649505, "Home GF/Home": 1.0, "Home GA/Home": 1.111111111111111, "Away GF/Away": 2.222222222222222, "Away GA/Away": 1.888888888888889}, {"Rank": 70, "League": "SerieA", "DateUTC (date)": "2026-01-19 17:30", "Home": "Cremonese", "Away": "Hellas Verona", "P(Over1.5)": 0.7531444590555942, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.709977883096366, "Model xG Home": 1.818666666666667, "Model xG Away": 0.8913112164296997, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.444444444444444, "Away GF/Away": 0.7, "Away GA/Away": 1.8}, {"Rank": 71, "League": "SerieA", "DateUTC (date)": "2026-01-18 11:30", "Home": "Parma", "Away": "Genoa", "P(Over1.5)": 0.7484277171718594, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.684032999824469, "Model xG Home": 1.028740740740741, "Model xG Away": 1.655292259083728, "Home GF/Home": 0.7, "Home GA/Home": 1.3, "Away GF/Away": 1.444444444444444, "Away GA/Away": 1.777777777777778}, {"Rank": 72, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "Eintracht Frankfurt", "Away": "TSG Hoffenheim", "P(Over1.5)": 0.7480057609861399, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.681732475598935, "Model xG Home": 1.131987577639751, "Model xG Away": 1.549744897959183, "Home GF/Home": 1.714285714285714, "Home GA/Home": 1.285714285714286, "Away GF/Away": 1.75, "Away GA/Away": 1.125}, {"Rank": 73, "League": "LaLiga", "DateUTC (date)": "2026-01-17 13:00", "Home": "Real Madrid", "Away": "Levante UD", "P(Over1.5)": 0.7474226018268619, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.678558518270073, "Model xG Home": 1.89812734082397, "Model xG Away": 0.7804311774461029, "Home GF/Home": 2.333333333333333, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.3, "Away GA/Away": 1.2}, {"Rank": 74, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "Borussia Dortmund", "Away": "SV Werder Bremen", "P(Over1.5)": 0.7462336183310013, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.672106730891114, "Model xG Home": 2.180124223602485, "Model xG Away": 0.4919825072886296, "Home GF/Home": 1.857142857142857, "Home GA/Home": 0.5714285714285714, "Away GF/Away": 1.25, "Away GA/Away": 2.0}, {"Rank": 75, "League": "EPL", "DateUTC (date)": "2026-01-18 14:00", "Home": "Wolves", "Away": "Newcastle", "P(Over1.5)": 0.7427129637142121, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.653153791637137, "Model xG Home": 0.7590361445783133, "Model xG Away": 1.894117647058823, "Home GF/Home": 1.0, "Home GA/Home": 2.3, "Away GF/Away": 1.0, "Away GA/Away": 1.2}, {"Rank": 76, "League": "Eredivisie", "DateUTC (date)": "2026-01-18 13:30", "Home": "FC Volendam", "Away": "FC Utrecht", "P(Over1.5)": 0.742306134239064, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.65097805827751, "Model xG Home": 1.522427983539095, "Model xG Away": 1.128550074738415, "Home GF/Home": 1.555555555555556, "Home GA/Home": 1.333333333333333, "Away GF/Away": 1.25, "Away GA/Away": 1.75}, {"Rank": 77, "League": "EPL", "DateUTC (date)": "2026-01-17 17:30", "Home": "Nott'm Forest", "Away": "Arsenal", "P(Over1.5)": 0.7408345539453757, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.643132530120482, "Model xG Home": 0.683132530120482, "Model xG Away": 1.96, "Home GF/Home": 1.2, "Home GA/Home": 1.7, "Away GF/Away": 1.4, "Away GA/Away": 0.9}, {"Rank": 78, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 15:45", "Home": "Sparta Rotterdam", "Away": "Heracles Almelo", "P(Over1.5)": 0.7389242709764516, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.633004853383528, "Model xG Home": 1.429218106995885, "Model xG Away": 1.203786746387643, "Home GF/Home": 1.0, "Home GA/Home": 2.0, "Away GF/Away": 0.8888888888888888, "Away GA/Away": 2.555555555555555}, {"Rank": 79, "League": "EPL", "DateUTC (date)": "2026-01-24 15:00", "Home": "Burnley", "Away": "Spurs", "P(Over1.5)": 0.736788373977525, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.621755861559998, "Model xG Home": 0.7841282485313152, "Model xG Away": 1.837627613028683, "Home GF/Home": 0.9090909090909091, "Home GA/Home": 1.363636363636364, "Away GF/Away": 1.636363636363636, "Away GA/Away": 1.363636363636364}, {"Rank": 80, "League": "Ligue1", "DateUTC (date)": "2026-01-17 16:00", "Home": "RC Lens", "Away": "AJ Auxerre", "P(Over1.5)": 0.733677867163955, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.605512640449438, "Model xG Home": 2.390625, "Model xG Away": 0.2148876404494382, "Home GF/Home": 2.0, "Home GA/Home": 0.5, "Away GF/Away": 0.5, "Away GA/Away": 2.0}, {"Rank": 81, "League": "LaLiga", "DateUTC (date)": "2026-01-19 20:00", "Home": "Elche CF", "Away": "Sevilla FC", "P(Over1.5)": 0.7312833205275386, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.593118055167359, "Model xG Home": 1.792675821889305, "Model xG Away": 0.8004422332780543, "Home GF/Home": 1.7, "Home GA/Home": 0.8, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.555555555555556}, {"Rank": 82, "League": "SerieA", "DateUTC (date)": "2026-01-18 19:45", "Home": "Milan", "Away": "Lecce", "P(Over1.5)": 0.72853814423166, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.579023696682465, "Model xG Home": 1.984, "Model xG Away": 0.5950236966824645, "Home GF/Home": 1.6, "Home GA/Home": 0.9, "Away GF/Away": 0.75, "Away GA/Away": 1.5}, {"Rank": 83, "League": "Ligue1", "DateUTC (date)": "2026-01-24 16:00", "Home": "Stade Rennais FC", "Away": "FC Lorient", "P(Over1.5)": 0.7264058057584957, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.568159124824438, "Model xG Home": 2.353271484375, "Model xG Away": 0.2148876404494382, "Home GF/Home": 2.25, "Home GA/Home": 1.0, "Away GF/Away": 0.25, "Away GA/Away": 1.75}, {"Rank": 84, "League": "LaLiga", "DateUTC (date)": "2026-01-18 15:15", "Home": "Atlético de Madrid", "Away": "Deportivo Alavés", "P(Over1.5)": 0.7210434617842661, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.541151141918374, "Model xG Home": 2.278506034124012, "Model xG Away": 0.2626451077943616, "Home GF/Home": 2.444444444444445, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 0.375, "Away GA/Away": 1.375}, {"Rank": 85, "League": "Eredivisie", "DateUTC (date)": "2026-01-24 15:30", "Home": "Ajax", "Away": "FC Volendam", "P(Over1.5)": 0.7185408906639625, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.528696696977246, "Model xG Home": 2.158391203703704, "Model xG Away": 0.3703054932735426, "Home GF/Home": 1.625, "Home GA/Home": 0.875, "Away GF/Away": 0.625, "Away GA/Away": 2.375}, {"Rank": 86, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 17:30", "Home": "1. FC Union Berlin", "Away": "Borussia Dortmund", "P(Over1.5)": 0.7112191279877618, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.492787128438332, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.538982780612245, "Home GF/Home": 1.625, "Home GA/Home": 1.375, "Away GF/Away": 1.625, "Away GA/Away": 1.0}, {"Rank": 87, "League": "Eredivisie", "DateUTC (date)": "2026-01-10 20:00", "Home": "FC Groningen", "Away": "NAC Breda", "P(Over1.5)": 0.707707519324138, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.475835097990367, "Model xG Home": 1.957407407407407, "Model xG Away": 0.5184276905829597, "Home GF/Home": 1.75, "Home GA/Home": 0.875, "Away GF/Away": 0.875, "Away GA/Away": 2.0}, {"Rank": 88, "League": "LaLiga", "DateUTC (date)": "2026-01-18 17:30", "Home": "Celta", "Away": "Rayo Vallecano", "P(Over1.5)": 0.7051549721037447, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.46361954273576, "Model xG Home": 1.410037453183521, "Model xG Away": 1.053582089552239, "Home GF/Home": 1.3, "Home GA/Home": 1.3, "Away GF/Away": 0.9, "Away GA/Away": 1.6}, {"Rank": 89, "League": "Ligue1", "DateUTC (date)": "2026-01-24 18:00", "Home": "Havre Athletic Club", "Away": "AS Monaco", "P(Over1.5)": 0.7010305953747643, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.444067108497191, "Model xG Home": 1.36962890625, "Model xG Away": 1.074438202247191, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.0, "Away GF/Away": 1.25, "Away GA/Away": 1.875}, {"Rank": 90, "League": "Bundesliga", "DateUTC (date)": "2026-01-15 19:30", "Home": "FC Augsburg", "Away": "1. FC Union Berlin", "P(Over1.5)": 0.6966279324557997, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.423441659272404, "Model xG Home": 1.131987577639751, "Model xG Away": 1.291454081632653, "Home GF/Home": 1.125, "Home GA/Home": 1.875, "Away GF/Away": 1.0, "Away GA/Away": 1.714285714285714}, {"Rank": 91, "League": "Bundesliga", "DateUTC (date)": "2026-01-10 14:30", "Home": "1. FC Heidenheim 1846", "Away": "1. FC Köln", "P(Over1.5)": 0.6953394195422582, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.41745230700976, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.463647959183673, "Home GF/Home": 1.0, "Home GA/Home": 2.125, "Away GF/Away": 1.0, "Away GA/Away": 1.625}, {"Rank": 92, "League": "SerieA", "DateUTC (date)": "2026-01-18 17:00", "Home": "Torino", "Away": "Roma", "P(Over1.5)": 0.6876052910794082, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.381936176935229, "Model xG Home": 0.6365333333333333, "Model xG Away": 1.745402843601896, "Home GF/Home": 1.1, "Home GA/Home": 1.8, "Away GF/Away": 1.1, "Away GA/Away": 0.7}, {"Rank": 93, "League": "Bundesliga", "DateUTC (date)": "2026-01-14 17:30", "Home": "VfL Wolfsburg", "Away": "FC St. Pauli", "P(Over1.5)": 0.6768842618770161, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.333882126220053, "Model xG Home": 1.31148097826087, "Model xG Away": 1.022401147959184, "Home GF/Home": 1.625, "Home GA/Home": 2.375, "Away GF/Away": 0.625, "Away GA/Away": 1.375}, {"Rank": 94, "League": "Ligue1", "DateUTC (date)": "2026-01-16 18:00", "Home": "AS Monaco", "Away": "FC Lorient", "P(Over1.5)": 0.6768503034356163, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.33373200491573, "Model xG Home": 1.9755859375, "Model xG Away": 0.3581460674157304, "Home GF/Home": 1.888888888888889, "Home GA/Home": 1.666666666666667, "Away GF/Away": 0.25, "Away GA/Away": 1.75}, {"Rank": 95, "League": "LaLiga", "DateUTC (date)": "2026-01-10 15:15", "Home": "Villarreal CF", "Away": "Deportivo Alavés", "P(Over1.5)": 0.6683364316677551, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.296493500040373, "Model xG Home": 2.07136912193092, "Model xG Away": 0.2251243781094527, "Home GF/Home": 2.222222222222222, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 0.375, "Away GA/Away": 1.375}, {"Rank": 96, "League": "SerieA", "DateUTC (date)": "2026-01-17 19:45", "Home": "Cagliari", "Away": "Juventus", "P(Over1.5)": 0.6604717950327738, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.262776900122871, "Model xG Home": 0.7348148148148148, "Model xG Away": 1.527962085308057, "Home GF/Home": 1.111111111111111, "Home GA/Home": 1.444444444444444, "Away GF/Away": 1.2, "Away GA/Away": 0.8}, {"Rank": 97, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Spurs", "Away": "West Ham", "P(Over1.5)": 0.6587966472177313, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.255676824946847, "Model xG Home": 1.366265060240964, "Model xG Away": 0.8894117647058825, "Home GF/Home": 1.2, "Home GA/Home": 1.2, "Away GF/Away": 0.9, "Away GA/Away": 1.8}, {"Rank": 98, "League": "SerieA", "DateUTC (date)": "2026-01-11 19:45", "Home": "Inter", "Away": "Napoli", "P(Over1.5)": 0.6570549651352786, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.248324381253291, "Model xG Home": 1.543111111111111, "Model xG Away": 0.7052132701421799, "Home GF/Home": 2.666666666666667, "Home GA/Home": 0.6666666666666666, "Away GF/Away": 1.2, "Away GA/Away": 0.7}, {"Rank": 99, "League": "SerieA", "DateUTC (date)": "2026-01-19 19:45", "Home": "Lazio", "Away": "Como", "P(Over1.5)": 0.6518937671991545, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.226710900473933, "Model xG Home": 1.116, "Model xG Away": 1.110710900473934, "Home GF/Home": 1.5, "Home GA/Home": 0.9, "Away GF/Away": 1.4, "Away GA/Away": 0.9}, {"Rank": 100, "League": "LaLiga", "DateUTC (date)": "2026-01-17 15:15", "Home": "RCD Mallorca", "Away": "Athletic Club", "P(Over1.5)": 0.6509294714291176, "Pick": "🔥 Best", "Strength": "Best", "Model xG Total": 2.22270117024808, "Model xG Home": 1.28885189809035, "Model xG Away": 0.9338492721577298, "Home GF/Home": 1.222222222222222, "Home GA/Home": 1.333333333333333, "Away GF/Away": 0.7777777777777778, "Away GA/Away": 1.555555555555556}, {"Rank": 101, "League": "SerieA", "DateUTC (date)": "2026-01-14 17:30", "Home": "Napoli", "Away": "Parma", "P(Over1.5)": 0.6464722902198032, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.204281200631911, "Model xG Home": 1.653333333333333, "Model xG Away": 0.5509478672985781, "Home GF/Home": 2.0, "Home GA/Home": 1.0, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 102, "League": "SerieA", "DateUTC (date)": "2026-01-10 19:45", "Home": "Atalanta", "Away": "Torino", "P(Over1.5)": 0.646448469250247, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.204183254344391, "Model xG Home": 1.322666666666666, "Model xG Away": 0.881516587677725, "Home GF/Home": 1.2, "Home GA/Home": 0.9, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.333333333333333}, {"Rank": 103, "League": "LaLiga", "DateUTC (date)": "2026-01-10 20:00", "Home": "Valencia CF", "Away": "Elche CF", "P(Over1.5)": 0.6371555501716152, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.1663654263017, "Model xG Home": 1.55352684144819, "Model xG Away": 0.6128385848535103, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 0.875, "Away GA/Away": 1.875}, {"Rank": 104, "League": "Bundesliga", "DateUTC (date)": "2026-01-23 19:30", "Home": "FC St. Pauli", "Away": "Hamburger SV", "P(Over1.5)": 0.6370209016855926, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.165823117179436, "Model xG Home": 1.533274179236912, "Model xG Away": 0.6325489379425239, "Home GF/Home": 1.142857142857143, "Home GA/Home": 2.142857142857143, "Away GF/Away": 0.4285714285714285, "Away GA/Away": 2.285714285714286}, {"Rank": 105, "League": "SerieA", "DateUTC (date)": "2026-01-18 14:00", "Home": "Bologna", "Away": "Fiorentina", "P(Over1.5)": 0.6368392633131013, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.165091802703177, "Model xG Home": 1.616592592592593, "Model xG Away": 0.5484992101105843, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.8888888888888888, "Away GF/Away": 0.7, "Away GA/Away": 1.6}, {"Rank": 106, "League": "SerieA", "DateUTC (date)": "2026-01-12 19:45", "Home": "Juventus", "Away": "Cremonese", "P(Over1.5)": 0.6159915812134329, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.082991047919958, "Model xG Home": 1.377777777777778, "Model xG Away": 0.7052132701421799, "Home GF/Home": 1.666666666666667, "Home GA/Home": 0.8888888888888888, "Away GF/Away": 0.9, "Away GA/Away": 1.0}, {"Rank": 107, "League": "Bundesliga", "DateUTC (date)": "2026-01-18 14:30", "Home": "VfB Stuttgart", "Away": "1. FC Union Berlin", "P(Over1.5)": 0.6154415146296688, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.080872100392952, "Model xG Home": 1.293700088731145, "Model xG Away": 0.7871720116618075, "Home GF/Home": 1.285714285714286, "Home GA/Home": 1.142857142857143, "Away GF/Away": 1.0, "Away GA/Away": 1.714285714285714}, {"Rank": 108, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "Hamburger SV", "Away": "Borussia Mönchengladbach", "P(Over1.5)": 0.6101916644734897, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.060764989225504, "Model xG Home": 0.9538043478260869, "Model xG Away": 1.106960641399417, "Home GF/Home": 1.625, "Home GA/Home": 1.125, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.0}, {"Rank": 109, "League": "Eredivisie", "DateUTC (date)": "2026-01-17 17:45", "Home": "PEC Zwolle", "Away": "AZ", "P(Over1.5)": 0.6078062171773331, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.051697069515953, "Model xG Home": 0.7068415637860082, "Model xG Away": 1.344855505729945, "Home GF/Home": 0.875, "Home GA/Home": 1.375, "Away GF/Away": 1.444444444444444, "Away GA/Away": 1.444444444444444}, {"Rank": 110, "League": "SerieA", "DateUTC (date)": "2026-01-10 14:00", "Home": "Como", "Away": "Bologna", "P(Over1.5)": 0.6019929973749811, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.029773565034229, "Model xG Home": 1.515555555555556, "Model xG Away": 0.514218009478673, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.555555555555556, "Away GA/Away": 1.222222222222222}, {"Rank": 111, "League": "SerieA", "DateUTC (date)": "2026-01-24 14:00", "Home": "Como", "Away": "Torino", "P(Over1.5)": 0.599549798009764, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 2.020631911532385, "Model xG Home": 1.653333333333333, "Model xG Away": 0.3672985781990521, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.111111111111111, "Away GA/Away": 1.333333333333333}, {"Rank": 112, "League": "SerieA", "DateUTC (date)": "2026-01-12 17:30", "Home": "Genoa", "Away": "Cagliari", "P(Over1.5)": 0.5816683144001236, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 1.954968720379147, "Model xG Home": 0.6943999999999999, "Model xG Away": 1.260568720379147, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 1.1, "Away GA/Away": 1.4}, {"Rank": 113, "League": "Ligue1", "DateUTC (date)": "2026-01-17 20:05", "Home": "Angers SCO", "Away": "Olympique de Marseille", "P(Over1.5)": 0.569816450142989, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 1.91258394048455, "Model xG Home": 0.784423828125, "Model xG Away": 1.12816011235955, "Home GF/Home": 1.5, "Home GA/Home": 0.875, "Away GF/Away": 1.5, "Away GA/Away": 0.875}, {"Rank": 114, "League": "EPL", "DateUTC (date)": "2026-01-17 15:00", "Home": "Sunderland", "Away": "Crystal Palace", "P(Over1.5)": 0.5673416181201847, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 1.903841247342311, "Model xG Home": 1.113253012048193, "Model xG Away": 0.7905882352941177, "Home GF/Home": 1.6, "Home GA/Home": 0.8, "Away GF/Away": 1.2, "Away GA/Away": 1.1}, {"Rank": 115, "League": "LaLiga", "DateUTC (date)": "2026-01-18 13:00", "Home": "Getafe CF", "Away": "Valencia CF", "P(Over1.5)": 0.566309866935913, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 1.90020714157055, "Model xG Home": 1.449958385351644, "Model xG Away": 0.4502487562189055, "Home GF/Home": 0.875, "Home GA/Home": 0.75, "Away GF/Away": 0.6666666666666666, "Away GA/Away": 2.444444444444445}, {"Rank": 116, "League": "SerieA", "DateUTC (date)": "2026-01-10 17:00", "Home": "Roma", "Away": "Sassuolo", "P(Over1.5)": 0.562794674930653, "Pick": "💪 Strong", "Strength": "Strong", "Model xG Total": 1.887872369473212, "Model xG Home": 1.234897119341564, "Model xG Away": 0.6529752501316481, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.5555555555555556, "Away GF/Away": 1.333333333333333, "Away GA/Away": 1.222222222222222}, {"Rank": 117, "League": "Bundesliga", "DateUTC (date)": "2026-01-24 14:30", "Home": "1. FSV Mainz 05", "Away": "VfL Wolfsburg", "P(Over1.5)": 0.5444463948913452, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 1.824613385726962, "Model xG Home": 0.4716614906832298, "Model xG Away": 1.352951895043732, "Home GF/Home": 0.625, "Home GA/Home": 1.375, "Away GF/Away": 1.428571428571429, "Away GA/Away": 1.285714285714286}, {"Rank": 118, "League": "EPL", "DateUTC (date)": "2026-01-24 12:30", "Home": "West Ham", "Away": "Sunderland", "P(Over1.5)": 0.5378062195681663, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 1.802162466101646, "Model xG Home": 0.9514089415513294, "Model xG Away": 0.8507535245503162, "Home GF/Home": 1.181818181818182, "Home GA/Home": 2.272727272727273, "Away GF/Away": 0.4545454545454545, "Away GA/Away": 1.272727272727273}, {"Rank": 119, "League": "Bundesliga", "DateUTC (date)": "2026-01-17 14:30", "Home": "Borussia Dortmund", "Away": "FC St. Pauli", "P(Over1.5)": 0.5205466762108226, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 1.744826657371023, "Model xG Home": 1.498835403726708, "Model xG Away": 0.2459912536443148, "Home GF/Home": 1.857142857142857, "Home GA/Home": 0.5714285714285714, "Away GF/Away": 0.625, "Away GA/Away": 1.375}, {"Rank": 120, "League": "EPL", "DateUTC (date)": "2026-01-18 16:30", "Home": "Aston Villa", "Away": "Everton", "P(Over1.5)": 0.5164720562249888, "Pick": "👍 Lean", "Strength": "Lean", "Model xG Total": 1.731495393338058, "Model xG Home": 1.13855421686747, "Model xG Away": 0.5929411764705883, "Home GF/Home": 1.8, "Home GA/Home": 0.8, "Away GF/Away": 0.9, "Away GA/Away": 1.0}, {"Rank": 121, "League": "Bundesliga", "DateUTC (date)": "2026-01-13 19:30", "Home": "1. FSV Mainz 05", "Away": "1. FC Heidenheim 1846", "P(Over1.5)": 0.4644716564146023, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.567392096590189, "Model xG Home": 0.890916149068323, "Model xG Away": 0.6764759475218659, "Home GF/Home": 0.625, "Home GA/Home": 1.375, "Away GF/Away": 0.7142857142857143, "Away GA/Away": 2.428571428571428}, {"Rank": 122, "League": "LaLiga", "DateUTC (date)": "2026-01-24 15:15", "Home": "Valencia CF", "Away": "RCD Espanyol de Barcelona", "P(Over1.5)": 0.4464876833434588, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.512914516058907, "Model xG Home": 0.7249791926758221, "Model xG Away": 0.7879353233830846, "Home GF/Home": 1.222222222222222, "Home GA/Home": 0.7777777777777778, "Away GF/Away": 1.125, "Away GA/Away": 0.875}, {"Rank": 123, "League": "LaLiga", "DateUTC (date)": "2026-01-10 13:00", "Home": "Real Oviedo", "Away": "Real Betis", "P(Over1.5)": 0.4220655573217933, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.440496228801892, "Model xG Home": 0.2175983724048643, "Model xG Away": 1.222897856397027, "Home GF/Home": 0.2222222222222222, "Home GA/Home": 1.111111111111111, "Away GF/Away": 1.222222222222222, "Away GA/Away": 1.444444444444444}, {"Rank": 124, "League": "SerieA", "DateUTC (date)": "2026-01-11 17:00", "Home": "Hellas Verona", "Away": "Lazio", "P(Over1.5)": 0.40039568567790107, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.377560119361067, "Model xG Home": 0.642962962962963, "Model xG Away": 0.7345971563981042, "Home GF/Home": 1.0, "Home GA/Home": 1.5, "Away GF/Away": 0.5555555555555556, "Away GA/Away": 0.7777777777777778}, {"Rank": 125, "League": "LaLiga", "DateUTC (date)": "2026-01-10 17:30", "Home": "Girona FC", "Away": "CA Osasuna", "P(Over1.5)": 0.3979127314220178, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.370420059502736, "Model xG Home": 0.8034401442641144, "Model xG Away": 0.5669799152386217, "Home GF/Home": 0.8888888888888888, "Home GA/Home": 1.888888888888889, "Away GF/Away": 0.3333333333333333, "Away GA/Away": 1.333333333333333}, {"Rank": 126, "League": "SerieA", "DateUTC (date)": "2026-01-15 19:45", "Home": "Como", "Away": "Milan", "P(Over1.5)": 0.37748396337712464, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.312174170616114, "Model xG Home": 0.775, "Model xG Away": 0.5371741706161137, "Home GF/Home": 1.5, "Home GA/Home": 0.375, "Away GF/Away": 1.625, "Away GA/Away": 0.625}, {"Rank": 127, "League": "LaLiga", "DateUTC (date)": "2026-01-11 13:00", "Home": "Rayo Vallecano", "Away": "RCD Mallorca", "P(Over1.5)": 0.36214108023545244, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.268959509568264, "Model xG Home": 0.7061485642946318, "Model xG Away": 0.5628109452736318, "Home GF/Home": 0.625, "Home GA/Home": 0.625, "Away GF/Away": 1.0, "Away GA/Away": 1.666666666666667}, {"Rank": 128, "League": "SerieA", "DateUTC (date)": "2026-01-11 11:30", "Home": "Lecce", "Away": "Parma", "P(Over1.5)": 0.34178928544600595, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.212232227488152, "Model xG Home": 0.4959999999999999, "Model xG Away": 0.7162322274881516, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 129, "League": "SerieA", "DateUTC (date)": "2026-01-16 19:45", "Home": "Pisa", "Away": "Atalanta", "P(Over1.5)": 0.32623537578650774, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.169261014569071, "Model xG Home": 0.09185185185185185, "Model xG Away": 1.07740916271722, "Home GF/Home": 0.1, "Home GA/Home": 1.0, "Away GF/Away": 1.222222222222222, "Away GA/Away": 1.111111111111111}, {"Rank": 130, "League": "SerieA", "DateUTC (date)": "2026-01-24 19:45", "Home": "Lecce", "Away": "Lazio", "P(Over1.5)": 0.27249147158824116, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 1.022428646656135, "Model xG Home": 0.3857777777777778, "Model xG Away": 0.6366508688783571, "Home GF/Home": 0.6, "Home GA/Home": 1.3, "Away GF/Away": 0.5555555555555556, "Away GA/Away": 0.7777777777777778}, {"Rank": 131, "League": "Eredivisie", "DateUTC (date)": "2026-01-16 19:00", "Home": "Excelsior Rotterdam", "Away": "Telstar", "P(Over1.5)": 0.25223148608865875, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 0.9673485393714591, "Model xG Home": 0.497119341563786, "Model xG Away": 0.4702291978076731, "Home GF/Home": 0.8888888888888888, "Home GA/Home": 1.111111111111111, "Away GF/Away": 0.625, "Away GA/Away": 1.0}, {"Rank": 132, "League": "LaLiga", "DateUTC (date)": "2026-01-24 13:00", "Home": "Rayo Vallecano", "Away": "CA Osasuna", "P(Over1.5)": 0.17425256525680433, "Pick": "🚫 Avoid", "Strength": "Avoid", "Model xG Total": 0.7525224998602492, "Model xG Home": 0.5649188514357053, "Model xG Away": 0.1876036484245439, "Home GF/Home": 0.625, "Home GA/Home": 0.625, "Away GF/Away": 0.3333333333333333, "Away GA/Away": 1.333333333333333}, {"Rank": 133, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 00:00", "Home": "M'gladbach", "Away": "Augsburg", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 134, "League": "Bundesliga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Bayern Munich", "Away": "Wolfsburg", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 135, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Levadeiakos", "Away": "Volos NFC", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 136, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "OFI Crete", "Away": "Asteras Tripolis", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 137, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Aris", "Away": "AEK", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 138, "League": "GreeceSL", "DateUTC (date)": "2026-01-11 00:00", "Home": "Panathinaikos", "Away": "Panserraikos", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 139, "League": "SerieA", "DateUTC (date)": "2026-01-11 00:00", "Home": "Verona", "Away": "Lazio", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 140, "League": "SerieB", "DateUTC (date)": "2026-01-11 00:00", "Home": "Mantova", "Away": "Palermo", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 141, "League": "SerieB", "DateUTC (date)": "2026-01-11 00:00", "Home": "Padova", "Away": "Modena", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 142, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Heerenveen", "Away": "Feyenoord", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 143, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Go Ahead Eagles", "Away": "For Sittard", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 144, "League": "Eredivisie", "DateUTC (date)": "2026-01-11 00:00", "Home": "Sparta Rotterdam", "Away": "Heracles", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 145, "League": "PrimeiraLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Nacional", "Away": "Santa Clara", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 146, "League": "PrimeiraLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Moreirense", "Away": "Tondela", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 147, "League": "ScotPrem", "DateUTC (date)": "2026-01-11 00:00", "Home": "Dundee", "Away": "Hearts", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 148, "League": "ScotPrem", "DateUTC (date)": "2026-01-11 00:00", "Home": "Aberdeen", "Away": "Rangers", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 149, "League": "LaLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Vallecano", "Away": "Mallorca", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 150, "League": "LaLiga", "DateUTC (date)": "2026-01-11 00:00", "Home": "Levante", "Away": "Espanol", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 151, "League": "LaLiga", "DateUTC (date)": "2026-01-12 00:00", "Home": "Sevilla", "Away": "Celta", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 152, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Leganes", "Away": "Valladolid", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 153, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Granada", "Away": "Castellon", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 154, "League": "LaLiga2", "DateUTC (date)": "2026-01-11 00:00", "Home": "Malaga", "Away": "Ceuta", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 155, "League": "LaLiga2", "DateUTC (date)": "2026-01-12 00:00", "Home": "Huesca", "Away": "Cordoba", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 156, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Club Leon", "Away": "Cruz Azul", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 157, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Santos Laguna", "Away": "Necaxa", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 158, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "Monterrey", "Away": "Toluca", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 159, "League": "LigaMX", "DateUTC (date)": "2026-01-11 00:00", "Home": "UNAM Pumas", "Away": "Queretaro", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}, {"Rank": 160, "League": "LigaMX", "DateUTC (date)": "2026-01-12 00:00", "Home": "Atl. San Luis", "Away": "Tigres UANL", "P(Over1.5)": null, "Pick": "", "Strength": "", "Model xG Total": null, "Model xG Home": null, "Model xG Away": null, "Home GF/Home": null, "Home GA/Home": null, "Away GF/Away": null, "Away GA/Away": null}], "probCol": "P(Over1.5)"}];

const state = {
  datasets: [...DATASETS, {slug:"tracker", name:"Tracker", rows:[], columns:[], probCol:null}, {slug:"acca Tracker", name:"Acca Tracker", rows:[], columns:[], probCol:null}],
  current: null,
  raw: [],
  filtered: [],
  columnsAll: [],
  columns: [],
  sortKey: null,
  sortDir: "asc",
  compact: true
};


// ---- Tracker (local) ----
const TRACKER_KEY = "picks_tracker_v1";
const BANKROLL_KEY = "picks_bankroll_v1";
const TRACKER_FILTER_KEY = "picks_tracker_filter_v1";
const ACCAS_KEY = "picks_accas_v1";
const ACCA_BANKROLL_KEY = "picks_acca_bankroll_v1";
const DEFAULT_STAKE = 1;
const DEFAULT_ODDS = 2.0;

const CURRENCY = "£";
function money(n){
  const v = Number(n);
  if(!Number.isFinite(v)) return CURRENCY + "0.00";
  const sign = v < 0 ? "-" : "";
  return sign + CURRENCY + Math.abs(v).toFixed(2);
}

function loadTracker(){
  try{
    const raw = localStorage.getItem(TRACKER_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  }catch(e){ return []; }
}
function saveTracker(){
  try{ localStorage.setItem(TRACKER_KEY, JSON.stringify(state.tracker || [])); }catch(e){}
}

function loadBankroll(){
  try{
    const raw = localStorage.getItem(BANKROLL_KEY);
    const v = raw ? JSON.parse(raw) : null;
    if(v && typeof v.start === "number") return v;
  }catch(e){}
  return { start: 100, updatedAt: Date.now() };
}
function saveBankroll(obj){
  try{ localStorage.setItem(BANKROLL_KEY, JSON.stringify(obj)); }
  catch(e){}
}

function loadTrackerFilter(){
  try{
    const raw = localStorage.getItem(TRACKER_FILTER_KEY);
    const v = raw ? JSON.parse(raw) : null;
    if(v && typeof v === "object") return v;
  }catch(e){}
  return { status: "all", range: "all", league: "all", q: "" };
}
function saveTrackerFilter(obj){
  try{ localStorage.setItem(TRACKER_FILTER_KEY, JSON.stringify(obj)); }catch(e){}
}
function inRange(t, range){
  if(range === "all") return true;
  const ts = (t.updatedAt || t.createdAt || 0);
  const d = new Date(ts);
  const now = new Date();
  if(range === "today"){
    return d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth() && d.getDate()===now.getDate();
  }
  if(range === "7d"){
    return (now.getTime() - ts) <= 7*24*60*60*1000;
  }
  return true;
}
function normStr(s){ return (s||"").toString().trim().toLowerCase(); }
function matchQ(t, q){
  if(!q) return true;
  const hay = [
    t.market, t.league, t.date, t.home, t.away, t.pick
  ].map(normStr).join(" ");
  return hay.includes(normStr(q));
}
function downloadText(filename, text, mime="text/plain"){
  const blob = new Blob([text], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 800);
}
function trackerToCsv(arr){
  const cols = ["status","market","league","date","home","away","prob","pick","stake","odds","profit","createdAt","updatedAt"];
  const esc = (v)=>{
    const s = (v===null||v===undefined) ? "" : String(v);
    if(/[",\n\r]/.test(s)) return '"' + s.replace(/"/g,'""') + '"';
    return s;
  };
  const lines = [];
  lines.push(cols.join(","));
  for(const t of arr){
    const row = {
      status: t.status||"",
      market: t.market||"",
      league: t.league||"",
      date: t.date||"",
      home: t.home||"",
      away: t.away||"",
      prob: (typeof t.prob==="number") ? Math.round(t.prob*100)+"%" : "",
      pick: t.pick||"",
      stake: (typeof t.stake==="number") ? t.stake : "",
      odds: (typeof t.odds==="number") ? t.odds : "",
      profit: (typeof betProfit==="function") ? money(betProfit(t)) : "",
      createdAt: t.createdAt ? new Date(t.createdAt).toISOString() : "",
      updatedAt: t.updatedAt ? new Date(t.updatedAt).toISOString() : ""
    };
    lines.push(cols.map(c=>esc(row[c])).join(","));
  }
  return lines.join("\n");
}
function betSlipLine(t){
  const prob = (typeof t.prob==="number") ? (Math.round(t.prob*100)+"%") : "";
  const so = ((typeof t.stake==="number" && isFinite(t.stake)) ? ("Stake "+t.stake) : "") +
             ((typeof t.odds==="number" && isFinite(t.odds)) ? (" @"+t.odds) : "");
  return `${t.home} vs ${t.away} — ${t.market}${t.pick ? (" • "+t.pick):""}${prob ? (" • "+prob):""}${so ? (" • "+so):""}${t.league?(" • "+t.league):""}${t.date?(" • "+t.date+" UTC"):""}`;
}
async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    return true;
  }catch(e){
    try{
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    }catch(e2){ return false; }
  }
}

function uid(){
  return "t_" + Math.random().toString(36).slice(2,10) + "_" + Date.now().toString(36);
}
function normPickLabel(row){
  return row.Pick || row.Strength || "";
}
function inferProb(row){
  const pCol = state.current?.probCol;
  const v = pCol ? row[pCol] : null;
  return (typeof v === "number" && isFinite(v)) ? v : null;
}
function addToTracker(row){
  state.tracker = state.tracker || loadTracker();
  const home = row.Home || "";
  const away = row.Away || "";
  const league = row.League || "";
  const date = row["DateUTC (date)"] || row.Date || "";
  const market = state.current?.name || "";
  const prob = inferProb(row);
  const pick = normPickLabel(row);
  const key = `${market}||${league}||${date}||${home}||${away}`;
  // prevent duplicates
  if(state.tracker.some(x => x.key === key)) return false;
  state.tracker.unshift({
    id: uid(),
    key,
    status: "pending",
    stake: DEFAULT_STAKE,
    odds: DEFAULT_ODDS,
    createdAt: Date.now(),
    market, league, date, home, away,
    prob, pick
  });
  saveTracker();
  return true;
}
function setTrackerStatus(id, status){
  const t = (state.tracker||[]).find(x=>x.id===id);
  if(!t) return;
  t.status = status;
  t.updatedAt = Date.now();
  saveTracker();
}
function removeTracker(id){
  state.tracker = (state.tracker||[]).filter(x=>x.id!==id);
  saveTracker();
}


function drawBankrollChart(canvas, points){
  if(!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);

  if(!points || points.length < 2){
    ctx.globalAlpha = 0.7;
    ctx.fillText("No settled bets yet", 10, 20);
    ctx.globalAlpha = 1;
    return;
  }

  const min = Math.min(...points);
  const max = Math.max(...points);
  const pad = 10;
  const rng = (max-min) || 1;

  // axes baseline
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.moveTo(pad, h-pad);
  ctx.lineTo(w-pad, h-pad);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.beginPath();
  for(let i=0;i<points.length;i++){
    const x = pad + (i*( (w-2*pad) / (points.length-1) ));
    const y = pad + ((max-points[i]) * ((h-2*pad)/rng));
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.stroke();

  // last point label
  const last = points[points.length-1];
  ctx.globalAlpha = 0.8;
  ctx.fillText((money(last)), w-pad-40, pad+12);
  ctx.globalAlpha = 1;
}

function betProfit(t){
  const stake = (typeof t.stake === "number" && isFinite(t.stake)) ? t.stake : 0;
  const odds  = (typeof t.odds  === "number" && isFinite(t.odds))  ? t.odds  : 0;
  if(t.status === "won") return stake * Math.max(0, (odds - 1));
  if(t.status === "lost") return -stake;
  return 0;
}

function marketKey(name){
  return (name||"").toString().trim().toLowerCase();
}
function leaguePerfByMarket(marketName){
  const key = marketKey(marketName);
  const arr = (state.tracker||[]).filter(x=> (marketKey(x.market)===key) && (x.status==="won"||x.status==="lost"));
  const map = new Map();
  arr.forEach(t=>{
    const league = t.league || "Unknown";
    if(!map.has(league)) map.set(league, {league, staked:0, profit:0, bets:0, won:0, lost:0});
    const o = map.get(league);
    const stake = (typeof t.stake==="number" && isFinite(t.stake)) ? t.stake : 0;
    o.staked += stake;
    const p = (typeof betProfit==="function") ? betProfit(t) : 0;
    o.profit += p;
    o.bets += 1;
    if(t.status==="won") o.won += 1; else if(t.status==="lost") o.lost += 1;
  });
  const out = Array.from(map.values()).map(o=>{
    const roi = o.staked ? (o.profit/o.staked) : 0;
    const winp = (o.won+o.lost) ? Math.round((o.won/(o.won+o.lost))*100) : 0;
    return {...o, roi, winp};
  });
  out.sort((a,b)=>b.roi - a.roi);
  return out;
}
function drawLeagueBarChart(canvas, items){
  if(!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  ctx.font = "12px system-ui, -apple-system, Segoe UI, Roboto, Arial";
  ctx.textBaseline = "middle";

  if(!items || !items.length){
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "rgba(255,255,255,.85)";
    ctx.fillText("No settled bets yet", 10, 16);
    ctx.globalAlpha = 1;
    return;
  }
  const topN = items.slice(0, 8);
  const rois = topN.map(x=>x.roi);
  const min = Math.min(...rois, 0);
  const max = Math.max(...rois, 0.01);
  const padL = 10, padR = 10, padT = 18, padB = 10;
  const rowH = (h - padT - padB) / topN.length;
  const zeroX = padL + ((0 - min) / (max - min)) * (w - padL - padR);

  ctx.globalAlpha = 0.25;
  ctx.strokeStyle = "rgba(255,255,255,.8)";
  ctx.beginPath();
  ctx.moveTo(zeroX, padT);
  ctx.lineTo(zeroX, h-padB);
  ctx.stroke();
  ctx.globalAlpha = 1;

  topN.forEach((x,i)=>{
    const y = padT + i*rowH + rowH/2;
    const barW = ((x.roi - 0) / (max - min)) * (w - padL - padR);
    const x0 = zeroX;
    const x1 = zeroX + barW;

    const good = x.roi >= 0;
    ctx.fillStyle = good ? "#39ff14" : "#ff2d2d";

    const bx = good ? x0 : x1;
    const bw = abs(barW);
    const by = y - (rowH*0.28);
    const bh = rowH*0.56;
    ctx.globalAlpha = 0.85;
    ctx.fillRect(bx, by, bw, bh);
    ctx.globalAlpha = 1;

    ctx.fillStyle = "rgba(255,255,255,0.92)";
    const name = (x.league.length>18) ? x.league.slice(0,18)+"…" : x.league;
    ctx.fillText(name, padL, y);
    const label = (x.roi*100).toFixed(1) + "%";
    ctx.fillText(label, w - padR - ctx.measureText(label).width, y);
  });

  ctx.fillStyle = "#39ff14";
  ctx.fillText("Good", padL, 10);
  const m = ctx.measureText("Good").width;
  ctx.fillStyle = "#ff2d2d";
  ctx.fillText("Bad", padL + m + 14, 10);

  function abs(v){ return v<0 ? -v : v; }
}

function trackerFinance(){
  const arr = state.tracker || [];
  const decided = arr.filter(x=>x.status==="won" || x.status==="lost" || x.status==="void");
  const staked = decided.reduce((s,t)=> s + (((typeof t.stake==="number" && isFinite(t.stake))?t.stake:0)), 0);
  const profit = decided.reduce((s,t)=> s + betProfit(t), 0);
  const roi = staked ? (profit / staked) : 0;
  return { profit, staked, roi, decidedCount: decided.length };
}

function trackerStats(){
  const arr = state.tracker || [];
  const won = arr.filter(x=>x.status==="won").length;
  const lost = arr.filter(x=>x.status==="lost").length;
  const pending = arr.filter(x=>x.status==="pending").length;
  const voided = arr.filter(x=>x.status==="void").length;
  const decided = won + lost;
  const winp = decided ? Math.round((won/decided)*100) : 0;
  return {total: arr.length, won, lost, pending, voided, winp};
}


const probClass = (v) => {
  if(v < 0.50) return "avoid";
  if(v < 0.55) return "prob-low";
  if(v < 0.65) return "prob-mid";
  return "prob-high";
};

function normalizeStr(v){ return (v ?? "").toString().toLowerCase(); }

function parseDateOnly(s){
  if(!s) return null;
  const t = String(s).replace(" ", "T");
  const d = new Date(t + (t.length === 16 ? ":00" : "") + "Z");
  if(Number.isNaN(+d)) return null;
  return d;
}

function formatNum(v, digits=3){
  if(v === null || v === undefined || v === "") return "";
  const n = Number(v);
  if(Number.isNaN(n)) return String(v);
  return n.toFixed(digits).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1");
}

function setSelectOptions(sel, values, placeholder){
  sel.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = placeholder;
  sel.appendChild(opt0);
  [...values].sort((a,b)=>a.localeCompare(b)).forEach(v=>{
    const o = document.createElement("option");
    o.value = v;
    o.textContent = v;
    sel.appendChild(o);
  });
}

function inferPrimaryCols(cols){
  const want = ["Rank","DateUTC (date)","League","Home","Away", state.current?.probCol, "Pick","Strength","Model xG Total"];
  const chosen = [];
  want.forEach(k=>{ if(k && cols.includes(k) && !chosen.includes(k)) chosen.push(k); });
  if(chosen.length < 6){
    chosen.push(...cols.slice(0, Math.min(10, cols.length)).filter(c=>!chosen.includes(c)));
  }
  return chosen.slice(0, 10);
}

function buildTabs(){
  const tabs = $("tabs");
  tabs.innerHTML = "";
  state.datasets.forEach(d=>{
    const b = document.createElement("button");
    b.className = "tab";
    b.textContent = d.name;
    b.setAttribute("aria-selected", state.current?.slug === d.slug ? "true" : "false");
    b.addEventListener("click", ()=> loadDataset(d.slug));
    tabs.appendChild(b);
  });
}

function buildHead(){
  const thead = $("tbl").querySelector("thead");
  thead.innerHTML = "";
  const tr = document.createElement("tr");
  state.columns.forEach(key=>{
    const th = document.createElement("th");
    const arrow = (state.sortKey === key) ? (state.sortDir === "asc" ? " ▲" : " ▼") : "";
    th.textContent = key + arrow;
    th.addEventListener("click", ()=>{
      if(state.sortKey === key) state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      else { state.sortKey = key; state.sortDir = "asc"; }
      render();
    });
    tr.appendChild(th);
  });
  thead.appendChild(tr);
}

function sortData(rows){
  const key = state.sortKey;
  if(!key) return rows;
  const dir = state.sortDir === "asc" ? 1 : -1;
  rows.sort((a,b)=>{
    const av = a[key];
    const bv = b[key];
    if(String(key).toLowerCase().includes("date")){
      const ad = parseDateOnly(av);
      const bd = parseDateOnly(bv);
      return dir * ((ad?.getTime() ?? 0) - (bd?.getTime() ?? 0));
    }
    const an = Number(av), bn = Number(bv);
    if(Number.isFinite(an) && Number.isFinite(bn)) return dir * (an - bn);
    return dir * String(av ?? "").localeCompare(String(bv ?? ""));
  });
  return rows;
}

function applyFilters(){
  const q = normalizeStr($("q").value);
  const league = $("league").value;
  const pick = $("pick").value;
  const pminPct = $("pmin").value ? Number($("pmin").value) : null;
  const dfrom = $("dfrom").value ? new Date($("dfrom").value + "T00:00:00Z") : null;
  const dto = $("dto").value ? new Date($("dto").value + "T23:59:59Z") : null;

  const pCol = state.current?.probCol;
  const dateKey = ("DateUTC (date)" in (state.raw[0]||{})) ? "DateUTC (date)" : null;

  const rows = state.raw.filter(r=>{
    if(league && r.League !== league) return false;
    if(pick && (r.Pick ?? "") !== pick) return false;
    if(pCol && pminPct !== null && typeof r[pCol] === "number" && (r[pCol]*100) < pminPct) return false;
    if((dfrom || dto) && dateKey){
      const d = parseDateOnly(r[dateKey]);
      if(!d) return false;
      if(dfrom && d < dfrom) return false;
      if(dto && d > dto) return false;
    }
    if(q){
      const hay = [r.League, r.Home, r.Away, r.Pick, r[dateKey]].map(normalizeStr).join(" ");
      if(!hay.includes(q)) return false;
    }
    return true;
  });

  state.filtered = sortData(rows);
}

function cellHTML(key, v){
  const kl = String(key).toLowerCase();
  if(kl.startsWith("p(") && typeof v === "number"){
    return `<span class="badge mono ${probClass(v)}">${Math.round(v*100)}%</span>`;
  }
  if(Number.isFinite(Number(v)) && v !== "" && v !== null && v !== undefined){
    const n = (typeof v === "number") ? v : Number(v);
    return `<span class="mono">${formatNum(n,3)}</span>`;
  }
  return (v ?? "").toString();
}

function buildBody(){
  const tbody = $("tbl").querySelector("tbody");
  tbody.innerHTML = "";
  state.filtered.forEach(r=>{
    const tr = document.createElement("tr");
    tr.addEventListener("click", ()=> openDetails(r));
    state.columns.forEach(key=>{
      const td = document.createElement("td");
      td.innerHTML = cellHTML(key, r[key]);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function buildCards(){
  const list = $("cardList");
  list.innerHTML = "";
  const rows = state.filtered;
  if(!rows.length) return;

  const pCol = state.current?.probCol;
  const dateKey = ("DateUTC (date)" in rows[0]) ? "DateUTC (date)" : null;
  const show = inferPrimaryCols(state.columnsAll);

  rows.forEach(r=>{
    const item = document.createElement("div");
    item.className = "cardItem";
    item.addEventListener("click", ()=> openDetails(r));

    const top = document.createElement("div");
    top.className = "cardTop";

    const left = document.createElement("div");
    const title = document.createElement("div");
    title.className = "cardTitle";
    title.textContent = (r.Home && r.Away) ? `${r.Home} vs ${r.Away}` : (r.League || "Row");
    const sub = document.createElement("div");
    sub.className = "cardSub";
    const parts = [];
    if(r.League) parts.push(r.League);
    if(dateKey && r[dateKey]) parts.push(`${r[dateKey]} UTC`);
    if(r.Pick) parts.push(r.Pick); else if(r.Strength) parts.push(r.Strength);
    sub.textContent = parts.join(" • ");
    left.appendChild(title);
    left.appendChild(sub);

    const right = document.createElement("div");
    // Add-to-tracker button
    const addBtn = document.createElement("button");
    addBtn.className = "trackAdd";
    addBtn.type = "button";
    addBtn.textContent = "Add";
    addBtn.title = "Add to Tracker";

    // lock if already tracked
    try{
      const home = r.Home || "";
      const away = r.Away || "";
      const league = r.League || "";
      const date = r["DateUTC (date)"] || r.Date || "";
      const market = state.current?.name || "";
      const key = `${market}||${league}||${date}||${home}||${away}`;
      const existing = (state.tracker || loadTracker()).some(x => x.key === key);
      if(existing){
        addBtn.textContent = "✓ Added";
        addBtn.disabled = true;
        addBtn.setAttribute("aria-disabled","true");
        addBtn.classList.add("added");
      }
    }catch(e){}

    addBtn.addEventListener("click", (ev)=>{
      ev.stopPropagation();
      const ok = addToTracker(r);
      if(ok){
        addBtn.textContent = "✓ Added";
        addBtn.disabled = true;
        addBtn.setAttribute("aria-disabled","true");
        addBtn.classList.add("added");
      }
    });
    right.appendChild(addBtn);
    if(pCol && typeof r[pCol] === "number"){
      const span = document.createElement("span");
      span.className = `badge mono ${probClass(r[pCol])}`;
      span.textContent = `${Math.round(r[pCol]*100)}%`;
      right.appendChild(span);
    }
    top.appendChild(left);
    top.appendChild(right);

    const grid = document.createElement("div");
    grid.className = "cardGrid";
    show.slice(0,6).forEach(k=>{
      if(k === "Home" || k === "Away") return;
      const kv = document.createElement("div");
      const kk = document.createElement("div"); kk.className="k"; kk.textContent=k;
      const vv = document.createElement("div"); vv.className="v"; vv.innerHTML = cellHTML(k, r[k]);
      kv.appendChild(kk); kv.appendChild(vv); grid.appendChild(kv);
    });

    item.appendChild(top);
    item.appendChild(grid);
    list.appendChild(item);
  });
}

function openDetails(row){
  $("d_title").textContent = (row.Home && row.Away) ? `${row.Home} vs ${row.Away}` : (state.current?.name ?? "Details");
  $("d_sub").textContent = (row.League ? `${row.League} • ` : "") + (row["DateUTC (date)"] ? `${row["DateUTC (date)"]} (UTC)` : "");
  const wrap = document.createElement("div"); wrap.className="kv";
  Object.keys(row).forEach(k=>{
    const kk=document.createElement("div"); kk.className="k"; kk.textContent=k;
    const vv=document.createElement("div"); vv.className="v";
    vv.innerHTML = cellHTML(k, row[k]);
    wrap.appendChild(kk); wrap.appendChild(vv);
  });
  $("d_body").innerHTML=""; $("d_body").appendChild(wrap);
  $("details").showModal();
}

function initFilters(){
  const leagues = new Set(state.raw.map(r=>r.League).filter(Boolean));
  const picks = new Set(state.raw.map(r=>r.Pick).filter(Boolean));
  setSelectOptions($("league"), leagues, "All leagues");
  setSelectOptions($("pick"), picks, "All picks");

  $("league").closest(".control").style.display = leagues.size ? "" : "none";
  $("pick").closest(".control").style.display = picks.size ? "" : "none";

  const pCol = state.current?.probCol;
  $("pminWrap").style.display = pCol ? "" : "none";
  $("pminLabel").textContent = pCol ? `Min ${pCol} (%)` : "Min probability";
}

function loadDataset(slug){
  if(slug === "accas"){
    state.current = {slug:"accas", name:"Accas", rows:[], columns:[], probCol:null};
    state.tracker = loadTracker();
    state.accas = loadAccas();
    buildTabs();
    renderAccas();
    return;
  }
  if(slug === "tracker"){
    state.current = {slug:"tracker", name:"Tracker", rows:[], columns:[], probCol:null};
    state.tracker = loadTracker();
    buildTabs();
    renderTracker();
    return;
  }
  const ds = state.datasets.find(d=>d.slug===slug) || state.datasets[0];
  state.current = ds;
  state.raw = ds.rows;
  state.columnsAll = ds.columns;
  state.columns = inferPrimaryCols(state.columnsAll);
  state.sortKey = state.columns[0] || null;
  state.sortDir = "asc";
  // Default sort: BTTS by probability (high -> low)
  if(state.current?.slug === "btts-yes" && state.current?.probCol){
    state.sortKey = state.current.probCol;
    state.sortDir = "desc";
  }
  $("status").textContent = "Loaded.";
  buildTabs();
  initFilters();
  render();
}





function resetTracker(){
  if(!confirm("Reset tracker? This clears your win/loss history on this device.")) return;
  state.tracker = [];
  saveTracker();
  renderTracker();
}


function renderAccas(){
  try{ document.body.classList.add("trackerView"); }catch(e){}
  const list = $("cardList");
  list.innerHTML = "";

  state.tracker = state.tracker || loadTracker();
  state.accas = state.accas || loadAccas();

  const st = accaStats();

  const header = document.createElement("div");
  header.className = "accaHeader";
  header.innerHTML = `
    <div class="accaStats">
      <div class="tsRow"><span>Total accas</span><b>${st.total}</b></div>
      <div class="tsRow"><span>Pending</span><b>${st.pending}</b></div>
      <div class="tsRow"><span>Won</span><b>${st.won}</b></div>
      <div class="tsRow"><span>Lost</span><b>${st.lost}</b></div>
      <div class="tsRow"><span>Win rate</span><b>${st.winp}%</b></div>
      <div class="tsRow"><span>P/L</span><b>${(st.profit>=0?"+":"") + st.profit.toFixed(2)}</b></div>
      <div class="tsRow"><span>ROI</span><b>${(st.roi*100).toFixed(1)}%</b></div>
    </div>

    
    <div class="accaBuilder">
      <div class="tcTitle">Build an acca</div>
      <div class="abRow">
        <select id="abMarket" class="tfSel">
          <option value="all">All markets</option>
          <option value="Over 2.5">Over 2.5</option>
          <option value="BTTS Yes">BTTS Yes</option>
          <option value="Over 1.5">Over 1.5</option>
        </select>
        <select id="abFold" class="tfSel">
          <option value="2">Double (2-fold)</option>
          <option value="3">Treble (3-fold)</option>
          <option value="4">4-fold</option>
          <option value="5">5-fold</option>
        </select>
      </div>
      <div class="abRow">
        <input id="abStake" class="tbInput" inputmode="decimal" value="${DEFAULT_STAKE}">
        <button id="abAutoTop" class="tbBtn">Auto-pick top</button>
        <button id="abCreate" class="tbBtn">Create</button>
      </div>
      <div class="abRow">
        <button id="abBest" class="tbBtn">1‑tap Best (uses top probs)</button>
      </div>
      <div class="abHint">Select picks below (or Auto-pick), then Create. Odds multiply. Best = highest probabilities.</div>
    </div>
  `;

  // Acca bankroll + chart
  const abr = loadAccaBankroll();
  const finBr = accaStats();
  const currentAccaBr = abr.start + finBr.profit;

  const brBox = document.createElement("div");
  brBox.className = "trackerBankroll"; // reuse styles
  brBox.innerHTML = `
    <label class="tbLabel">Accas starting bankroll</label>
    <div class="tbRow">
      <input id="accaBrStart" class="tbInput" inputmode="decimal" value="${abr.start}">
      <button id="accaBrSave" class="tbBtn">Save</button>
    </div>
    <div class="tbHint">Accas current bankroll: <b>${currentAccaBr.toFixed(2)}</b></div>
  `;
  const chartWrap = document.createElement("div");
  chartWrap.className = "trackerChart";
  chartWrap.innerHTML = `
    <div class="tcTitle">Accas bankroll chart</div>
    <canvas id="accaChart" width="320" height="120"></canvas>
  `;
  const brRow = document.createElement("div");
  brRow.className = "accaBrRow";
  brRow.appendChild(brBox);
  brRow.appendChild(chartWrap);
  list.appendChild(brRow);

  try{
    $("accaBrSave").addEventListener("click", ()=>{
      const v = parseFloat(($("accaBrStart").value||"").replace(",","."));
      if(!isFinite(v)) return;
      saveAccaBankroll({ start: v, updatedAt: Date.now() });
      renderAccas();
    });
  }catch(e){}

  // draw acca chart from settled accas
  try{
    const decided = (state.accas||[])
      .filter(a=>a.status==="won" || a.status==="lost" || a.status==="void")
      .slice()
      .sort((a,b)=>(a.updatedAt||a.createdAt||0)-(b.updatedAt||b.createdAt||0));
    let brv = abr.start;
    const pts = [brv];
    decided.forEach(a=>{ brv += accaProfit(a); pts.push(brv); });
    if(typeof drawBankrollChart === "function") drawBankrollChart($("accaChart"), pts);
  }catch(e){}

  list.appendChild(header);

  $("count").textContent = `Accas • ${st.total} total • ${st.winp}% win`;
  $("status").textContent = "Acca builder ready.";

  const pending = state.tracker.filter(x=>x.status==="pending");
  const selected = new Set();

  function getPool(){
    const market = $("abMarket").value;
    return pending.filter(t=> market==="all" ? true : (t.market===market));
  }
  function topByProb(pool, n){
    return pool.slice().sort((a,b)=>((b.prob??-1)-(a.prob??-1))).slice(0,n);
  }
  function syncCheckboxes(fromIds){
    // clear all
    document.querySelectorAll(".accaPick input[type=checkbox]").forEach(cb=>{ cb.checked=false; });
    selected.clear();
    fromIds.forEach(id=>{
      const cb = document.querySelector(`.accaPick input[data-id="${id}"]`);
      if(cb){ cb.checked=true; selected.add(id); }
    });
  }

  const pickList = document.createElement("div");
  pickList.className = "accaPickList";

  pending.forEach(t=>{
    const row = document.createElement("div");
    row.className = "accaPick";
    row.innerHTML = `
      <label class="apChk">
        <input type="checkbox" data-id="${t.id}">
        <span>${t.home} vs ${t.away}</span>
      </label>
      <span class="apMeta">${t.market}${t.prob!=null?(" • "+Math.round(t.prob*100)+"%"):""}${t.odds!=null?(" • @"+t.odds):""}</span>
    `;
    pickList.appendChild(row);
  });

  if(!pending.length){
    const empty = document.createElement("div");
    empty.className = "trackEmpty";
    empty.textContent = "No pending picks to build accas.";
    list.appendChild(empty);
  } else {
    list.appendChild(pickList);
  }

  // wire checkboxes
  pickList.querySelectorAll("input[type=checkbox]").forEach(cb=>{
    cb.addEventListener("change", ()=>{
      const id = cb.getAttribute("data-id");
      if(cb.checked) selected.add(id); else selected.delete(id);
    });
  });


  $("abAutoTop").addEventListener("click", ()=>{
    const fold = parseInt($("abFold").value, 10);
    const pool = getPool();
    const legs = topByProb(pool, fold);
    syncCheckboxes(legs.map(l=>l.id));
  });

  $("abBest").addEventListener("click", ()=>{
    const fold = parseInt($("abFold").value, 10);
    const stake = parseFloat(($("abStake").value||"").replace(",","."));
    const pool = getPool();
    const legs = topByProb(pool, fold);
    if(legs.length !== fold){
      alert("Not enough pending picks for that fold.");
      return;
    }
    createAccaFromLegs(legs, stake);
    renderAccas();
  });

  $("abCreate").addEventListener("click", ()=>{
    const fold = parseInt($("abFold").value, 10);
    const stake = parseFloat(($("abStake").value||"").replace(",","."));
    const market = $("abMarket").value;
    const pool = pending.filter(t=> market==="all" ? true : (t.market===market));
    const legs = pool.filter(t=> selected.has(t.id)).slice(0, fold);
    if(legs.length !== fold){
      alert(`Select exactly ${fold} picks (matching the market filter).`);
      return;
    }
    createAccaFromLegs(legs, stake);
    // uncheck and re-render
    renderAccas();
  });

  // Acca list
  const sections = [
    {key:"pending", title:"🟡 Pending accas"},
    {key:"won", title:"✅ Won accas"},
    {key:"lost", title:"❌ Lost accas"},
    {key:"void", title:"⚪ Void accas"},
  ];

  sections.forEach(sec=>{
    const rows = (state.accas||[]).filter(a=>a.status===sec.key);
    const h = document.createElement("div");
    h.className = "trackSectionTitle";
    h.textContent = `${sec.title} • ${rows.length}`;
    list.appendChild(h);

    if(!rows.length){
      const empty = document.createElement("div");
      empty.className = "trackEmpty";
      empty.textContent = "No accas";
      list.appendChild(empty);
      return;
    }

    rows.forEach(a=>{
      const item = document.createElement("div");
      item.className = "cardItem trackItem";
      const top = document.createElement("div");
      top.className = "cardTop";

      const left = document.createElement("div");
      const title = document.createElement("div");
      title.className = "cardTitle";
      title.textContent = `${a.legs.length}-fold Acca`;
      const sub = document.createElement("div");
      sub.className = "cardSub";
      const pl = accaProfit(a);
      sub.textContent = `Stake ${a.stake} • Odds ${a.odds.toFixed(2)} • ${a.status.toUpperCase()} • P/L ${(pl>=0?"+":"") + pl.toFixed(2)}`;
      left.appendChild(title); left.appendChild(sub);

      const right = document.createElement("div");
      right.className = "trackActions";

      const legs = document.createElement("div");
      legs.className = "accaLegs";
      legs.innerHTML = a.legs.map(l=>`<div class="accaLeg">• ${l.home} vs ${l.away} — ${l.market}${l.odds?(" @"+l.odds):""}</div>`).join("");
      item.appendChild(legs);

      const mkBtn = (label, cls, fn)=>{
        const b = document.createElement("button");
        b.type="button";
        b.className = `trackBtn ${cls}`;
        b.textContent = label;
        b.addEventListener("click",(ev)=>{ ev.stopPropagation(); fn(); renderAccas(); });
        return b;
      };
      right.appendChild(mkBtn("✅", "win", ()=>setAccaStatus(a.id,"won")));
      right.appendChild(mkBtn("❌", "lose", ()=>setAccaStatus(a.id,"lost")));
      right.appendChild(mkBtn("⚪", "void", ()=>setAccaStatus(a.id,"void")));
      right.appendChild(mkBtn("🗑️", "del", ()=>removeAcca(a.id)));

      top.appendChild(left); top.appendChild(right);
      item.appendChild(top);
      list.appendChild(item);
    });
  });
}

function renderTracker(){

  // hide filters panel in tracker view (keep layout stable)
  try{ document.body.classList.add("trackerView"); }catch(e){}
  const list = $("cardList");
  list.innerHTML = "";

  const arr = state.tracker || loadTracker();
  state.tracker = arr;

  // Filters (persisted in localStorage). If anything goes wrong, fall back to showing all.
  const f2 = loadTrackerFilter();
  const filteredArr = (()=>{ try{ return filterTracker(arr, f2); }catch(e){ return (arr||[]); } })();

  const st = trackerStats();
  const fin = trackerFinance();
  const avgOdds = averageOddsGlobal(state.tracker);
  const br = loadBankroll();
  const currentBankroll = br.start + fin.profit;

  // Header block
  const header = document.createElement("div");
  header.className = "trackerHeader";

  const stats = document.createElement("div");
  stats.className = "trackerStats";
  stats.innerHTML = `
    <div class="tsRow"><span>Total</span><b>${st.total}</b></div>
    <div class="tsRow"><span>Pending</span><b>${st.pending}</b></div>
    <div class="tsRow"><span>Won</span><b>${st.won}</b></div>
    <div class="tsRow"><span>Lost</span><b>${st.lost}</b></div>
    <div class="tsRow"><span>Win rate</span><b>${st.winp}%</b></div>
    <div class="tsRow"><span>P/L</span><b>${(fin.profit>=0?"+":"") + money(fin.profit)}</b></div>
    <div class="tsRow"><span>ROI</span><b>${(fin.roi*100).toFixed(1)}%</b></div>
    <div class="tsRow"><span>Avg odds</span><b>${avgOdds!=null ? avgOdds.toFixed(2) : "—"}</b></div>
  `;

  const bankroll = document.createElement("div");
  bankroll.className = "trackerBankroll";
  bankroll.innerHTML = `
    <label class="tbLabel">Starting bankroll</label>
    <div class="tbRow">
      <input id="brStart" class="tbInput" inputmode="decimal" value="${br.start}">
      <button id="brSave" class="tbBtn">Save</button>
    </div>
    <div class="tbHint">Current bankroll: <b>${money(currentBankroll)}</b></div>
    <div class="tbRow" style="margin-top:10px;gap:8px;flex-wrap:wrap;">
  <button id="trackerExport" class="tbBtn">Export CSV</button>
  <button id="trackerCopyPending" class="tbBtn">Copy pending</button>
  <button id="trackerReset" class="tbBtn danger">Reset tracker</button>
</div>
  `;

  const chartWrap = document.createElement("div");
  chartWrap.className = "trackerChart";
  chartWrap.innerHTML = `
    <div class="tcTitle">Bankroll chart</div>
    <canvas id="brChart" width="320" height="120"></canvas>
  `;

  const f = loadTrackerFilter();
  state.trackerFilter = f;
  const filters = document.createElement("div");
  filters.className = "trackerFilters";
  const leagues = Array.from(new Set(arr.map(x=>x.league).filter(Boolean))).sort((a,b)=>String(a).localeCompare(String(b)));
  filters.innerHTML = `
    <div class="tfRow">
      <select id="tfStatus" class="tfSel">
        <option value="all">All statuses</option>
        <option value="pending">Pending</option>
        <option value="won">Won</option>
        <option value="lost">Lost</option>
        <option value="void">Void</option>
      </select>
      <select id="tfRange" class="tfSel">
        <option value="all">All time</option>
        <option value="today">Today</option>
        <option value="7d">Last 7 days</option>
      </select>
    </div>
    <div class="tfRow">
      <select id="tfLeague" class="tfSel">
        <option value="all">All leagues</option>
        ${leagues.map(l=>`<option value="${l.replace(/"/g,'&quot;')}">${l}</option>`).join('')}
      </select>
      <input id="tfQ" class="tfQ" placeholder="Search team/league…" value="${(f.q||'').replace(/"/g,'&quot;')}">
    </div>
  `;
  header.appendChild(stats);
  header.appendChild(filters);
  header.appendChild(bankroll);
  
  const leagueWrap = document.createElement("div");
  leagueWrap.className = "trackerLeagueCharts";
  leagueWrap.innerHTML = `
    <div class="tcTitle">League performance (ROI)</div>
    <div class="lcGrid">
      <div class="lcCard">
        <div class="lcTitle">Over 2.5</div>
        <canvas id="leagueChartO25" width="320" height="160"></canvas>
      </div>
      <div class="lcCard">
        <div class="lcTitle">BTTS Yes</div>
        <canvas id="leagueChartBTTS" width="320" height="160"></canvas>
      </div>
    </div>
  `;
header.appendChild(chartWrap);
  header.appendChild(leagueWrap);

  list.appendChild(header);

  // wire bankroll save + reset
  try{
    $("brSave").addEventListener("click", ()=>{
      const v = parseFloat(($("brStart").value||"").replace(",","."));
      if(!isFinite(v)) return;
      saveBankroll({ start: v, updatedAt: Date.now() });
      renderTracker();
    });
    $("trackerReset").addEventListener("click", resetTracker);
    try{ $("trackerExport").addEventListener("click", ()=>{
      const f = state.trackerFilter || loadTrackerFilter();
      const filtered = filterTracker(state.tracker||[], f);
      downloadText('tracker.csv', trackerToCsv(filtered), 'text/csv');
    }); }catch(e){}
    try{ $("trackerCopyPending").addEventListener("click", async ()=>{
      const pending = (state.tracker||[]).filter(x=>x.status==='pending');
      const text = pending.map(betSlipLine).join('\n');
      const ok = await copyText(text || '');
      alert(ok ? 'Copied pending ✅' : 'Copy failed');
    }); }catch(e){}
    // filters
    try{
      const f = state.trackerFilter || loadTrackerFilter();
      const setSel = (id, val)=>{ const el=$(id); if(el) el.value = val; };
      setSel('tfStatus', f.status||'all');
      setSel('tfRange', f.range||'all');
      setSel('tfLeague', f.league||'all');
      $("tfStatus").addEventListener('change', ()=>{ f.status=$("tfStatus").value; saveTrackerFilter(f); renderTracker(); });
      $("tfRange").addEventListener('change', ()=>{ f.range=$("tfRange").value; saveTrackerFilter(f); renderTracker(); });
      $("tfLeague").addEventListener('change', ()=>{ f.league=$("tfLeague").value; saveTrackerFilter(f); renderTracker(); });
      let qT;
      $("tfQ").addEventListener('input', ()=>{ clearTimeout(qT); qT=setTimeout(()=>{ f.q=$("tfQ").value; saveTrackerFilter(f); renderTracker(); }, 250); });
    }catch(e){}

  }catch(e){}

  // draw chart
  try{
    const decided = arr
      .filter(x=>x.status==="won" || x.status==="lost" || x.status==="void")
      .slice()
      .sort((a,b)=>(a.updatedAt||a.createdAt||0)-(b.updatedAt||b.createdAt||0));
    let brv = br.start;
    const pts = [brv];
    decided.forEach(t=>{ brv += betProfit(t); pts.push(brv); });
    drawBankrollChart($("brChart"), pts);
  }catch(e){}

  // league charts
  try{
    const o25 = leaguePerfByMarket("Over 2.5");
    const btts = leaguePerfByMarket("BTTS Yes");
    drawLeagueBarChart($("leagueChartO25"), o25);
    drawLeagueBarChart($("leagueChartBTTS"), btts);
  }catch(e){}

  $("count").textContent = `Tracker • ${st.total} total • ${st.winp}% win`;
  $("status").textContent = "Tracker ready.";
const sections = [
    {key:"pending", title:"🟡 Pending"},
    {key:"won", title:"✅ Won"},
    {key:"lost", title:"❌ Lost"},
    {key:"void", title:"⚪ Void"},
  ];
  const sectionsToShow = (f2.status && f2.status!=='all') ? sections.filter(s=>s.key===f2.status) : sections;
  sectionsToShow.forEach(sec=>{
    const rows = filteredArr.filter(x=>x.status===sec.key);
    const h = document.createElement("div");
    h.className = "trackSectionTitle";
    h.textContent = `${sec.title} • ${rows.length}`;
    list.appendChild(h);
    if(!rows.length){
      const empty = document.createElement("div");
      empty.className = "trackEmpty";
      empty.textContent = "No picks";
      list.appendChild(empty);
      return;
    }
    rows.forEach(t=>{
      const item = document.createElement("div");
      item.className = "cardItem trackItem";
      const top = document.createElement("div");
      top.className = "cardTop";
      const left = document.createElement("div");
      const title = document.createElement("div");
      title.className = "cardTitle";
      title.textContent = (t.home && t.away) ? `${t.home} vs ${t.away}` : (t.league || "Pick");
      const sub = document.createElement("div");
      sub.className = "cardSub";
      const parts = [];
      if(t.market) parts.push(t.market);
      if(t.league) parts.push(t.league);
      if(t.date) parts.push(`${t.date} UTC`);
      if(t.pick) parts.push(t.pick);
      if(t.status==="won"||t.status==="lost"||t.status==="void"){ parts.push(`P/L ${(betProfit(t)>=0?"+":"") + money(betProfit(t))}`); }
      sub.textContent = parts.join(" • ");
      left.appendChild(title); left.appendChild(sub);

      const right = document.createElement("div");
      right.className = "trackActions";
      if(typeof t.prob === "number"){
        const p = document.createElement("span");
        p.className = `badge mono ${probClass(t.prob)}`;
        p.textContent = `${Math.round(t.prob*100)}%`;
        right.appendChild(p);
      }

      // stake + odds inputs
      const so = document.createElement("div");
      so.className = "stakeOdds";
      so.innerHTML = `<label>Stake <input class="soIn" data-k="stake" inputmode="decimal" value="${(typeof t.stake==="number")?t.stake:DEFAULT_STAKE}"></label>
                      <label>Odds <input class="soIn" data-k="odds" inputmode="decimal" value="${(typeof t.odds==="number")?t.odds:DEFAULT_ODDS}"></label>`;
      so.querySelectorAll(".soIn").forEach(inp=>{
        inp.addEventListener("change", ()=>{
          const k = inp.getAttribute("data-k");
          const v = parseFloat((inp.value||"").replace(",","."));
          if(!isFinite(v)) return;
          t[k] = v;
          t.updatedAt = Date.now();
          saveTracker();
          renderTracker();
        });
      });
      right.appendChild(so);

      const mkBtn = (label, cls, fn)=>{
        const b = document.createElement("button");
        b.type="button";
        b.className = `trackBtn ${cls}`;
        b.textContent = label;
        b.addEventListener("click",(ev)=>{ ev.stopPropagation(); fn(); renderTracker(); });
        return b;
      };
      right.appendChild(mkBtn("✅", "win", ()=>setTrackerStatus(t.id,"won")));
      right.appendChild(mkBtn("❌", "lose", ()=>setTrackerStatus(t.id,"lost")));
      right.appendChild(mkBtn("⚪", "void", ()=>setTrackerStatus(t.id,"void")));
      right.appendChild(mkBtn("📋", "copy", async ()=>{ const ok = await copyText(betSlipLine(t)); alert(ok ? "Copied ✅" : "Copy failed"); }));
      right.appendChild(mkBtn("🗑️", "del", ()=>removeTracker(t.id)));

      top.appendChild(left); top.appendChild(right);
      item.appendChild(top);
      list.appendChild(item);
    });
  });
}
function render(){
  if(state.current?.slug === "tracker"){ renderTracker(); return; }
  if(state.current?.slug === "accas"){ renderAccas(); return; }
  // normal dashboards
  try{ document.body.classList.remove("trackerView"); }catch(e){}
  applyFilters();
  buildHead();
  buildBody();
  buildCards();
  $("count").textContent = `${state.filtered.length} of ${state.raw.length} rows • ${state.current?.name ?? ""}`;
}

function resetFilters(){
  $("q").value=""; $("league").value=""; $("pick").value=""; $("pmin").value=""; $("dfrom").value=""; $("dto").value="";
  state.sortKey = state.columns[0] || null; state.sortDir="asc";
  render();
}

function setCompact(on){
  state.compact = on;
  document.body.classList.toggle("compact", on);
  $("viewBtn").textContent = on ? "Wide" : "Compact";
  render();
}

async function init(){
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  // serviceWorker disabled (prevent stale cache)
  state.tracker = loadTracker();
  let deferredPrompt=null;
  window.addEventListener("beforeinstallprompt",(e)=>{ e.preventDefault(); deferredPrompt=e;  });
  $("installBtn").addEventListener("click", async ()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null;  });

  ["q","league","pick","pmin","dfrom","dto"].forEach(id=>{ $(id).addEventListener(id==="q" ? "input":"change", render); });
  $("resetBtn").addEventListener("click", resetFilters);
  $("viewBtn").addEventListener("click", ()=> setCompact(!state.compact));
  $("closeDlg").addEventListener("click", ()=> $("details").close());
  $("details").addEventListener("click",(e)=>{ const rect=$("details").getBoundingClientRect(); const inDialog = rect.top<=e.clientY && e.clientY<=rect.bottom && rect.left<=e.clientX && e.clientX<=rect.right; if(!inDialog) $("details").close(); });

  setCompact(window.matchMedia("(max-width: 640px)").matches);
  loadDataset(state.datasets[0]?.slug);
}
init();


function loadAccas(){
  try{
    const raw = localStorage.getItem(ACCAS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  }catch(e){ return []; }
}
function saveAccas(){
  try{ localStorage.setItem(ACCAS_KEY, JSON.stringify(state.accas || [])); }
  catch(e){}
}

function loadAccaBankroll(){
  try{
    const raw = localStorage.getItem(ACCA_BANKROLL_KEY);
    const v = raw ? JSON.parse(raw) : null;
    if(v && typeof v.start === "number") return v;
  }catch(e){}
  return { start: 50, updatedAt: Date.now() };
}
function saveAccaBankroll(obj){
  try{ localStorage.setItem(ACCA_BANKROLL_KEY, JSON.stringify(obj)); }catch(e){}
}
function accaProfit(a){
  const stake = (typeof a.stake === "number" && isFinite(a.stake)) ? a.stake : 0;
  const odds  = (typeof a.odds === "number" && isFinite(a.odds)) ? a.odds : 0;
  if(a.status === "won") return stake * Math.max(0, (odds - 1));
  if(a.status === "lost") return -stake;
  return 0;
}
function accaStats(){
  const arr = state.accas || [];
  const won = arr.filter(x=>x.status==="won").length;
  const lost = arr.filter(x=>x.status==="lost").length;
  const pending = arr.filter(x=>x.status==="pending").length;
  const voided = arr.filter(x=>x.status==="void").length;
  const decided = won + lost;
  const winp = decided ? Math.round((won/decided)*100) : 0;
  const staked = arr.reduce((s,a)=> s + (((typeof a.stake==="number" && isFinite(a.stake))?a.stake:0) * (a.status==="pending"?0:1)), 0);
  const profit = arr.reduce((s,a)=> s + accaProfit(a), 0);
  const roi = staked ? (profit / staked) : 0;
  return {total: arr.length, won, lost, pending, voided, winp, staked, profit, roi};
}
function createAccaFromLegs(legs, stake){
  const odds = legs.reduce((p,l)=> p * (((typeof l.odds==="number" && isFinite(l.odds))?l.odds:1)), 1);
  const a = {
    id: uid(),
    status: "pending",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    stake: (typeof stake==="number" && isFinite(stake)) ? stake : DEFAULT_STAKE,
    odds: odds,
    legs: legs.map(l=>({
      id: l.id, home:l.home, away:l.away, market:l.market, league:l.league, date:l.date,
      pick:l.pick, prob:l.prob, odds:l.odds
    }))
  };
  state.accas = state.accas || loadAccas();
  state.accas.unshift(a);
  saveAccas();
}
function setAccaStatus(id, status){
  const a = (state.accas||[]).find(x=>x.id===id);
  if(!a) return;
  a.status = status;
  a.updatedAt = Date.now();
  saveAccas();
}
function removeAcca(id){
  state.accas = (state.accas||[]).filter(x=>x.id!==id);
  saveAccas();
}

function filterTracker(arr, f){
  // v2 filters: q, market, status, from, to, tab
  // Backwards compatible with v1 (league/range) so older caches don't crash.
  const status = (f && f.status) ? f.status : "all";
  const market = (f && f.market) ? f.market : "all";
  const tab = (f && f.tab) ? f.tab : "all"; // all | singles | accas
  const q = (f && f.q) ? f.q : "";

  // Date range: prefer explicit from/to; fall back to legacy "range"
  const from = (f && f.from) ? f.from : "";
  const to = (f && f.to) ? f.to : "";
  const legacyRange = (f && f.range) ? f.range : "all";

  const fromTs = from ? Date.parse(from) : NaN;
  const toTs = to ? Date.parse(to) : NaN;

  const inFromTo = (t) => {
    const ts = (t.updatedAt || t.createdAt || 0);
    if(!isNaN(fromTs) && ts < fromTs) return false;
    if(!isNaN(toTs)){
      // include the whole 'to' day when user chooses a date-only value
      const end = toTs + 24*60*60*1000 - 1;
      if(ts > end) return false;
    }
    return true;
  };

  return (arr||[]).filter(t=>{
    if(status!=="all" && t.status!==status) return false;
    if(tab==="singles" && t.type!=="single") return false;
    if(tab==="accas" && t.type!=="acca") return false;
    if(market!=="all" && (t.market||t.pick||"")!==market) return false;
    if(!inFromTo(t)){
      // If no explicit from/to are set, fall back to legacy range.
      if(!(from||to) && !inRange(t, legacyRange)) return false;
      if(from||to) return false;
    }
    if(!matchQ(t, q)) return false;
    return true;
  });
}


function averageOddsGlobal(arr){
  const settled = (arr||[]).filter(t =>
    (t.status === "won" || t.status === "lost") &&
    typeof t.odds === "number" &&
    isFinite(t.odds) &&
    t.odds > 1
  );
  if(!settled.length) return null;
  const sum = settled.reduce((s,t)=>s+t.odds,0);
  return sum / settled.length;
}
