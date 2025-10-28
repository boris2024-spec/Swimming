
# Hapoel Be’er Sheva Swim — Vite + React + MUI (RTL)

אתר תדמית ל"הפועל באר שבע — שחייה" עם RTL מלא, מצב כהה/בהיר, ניווט המבורגר ועמודי עומק.

## 📦 התקנה והרצה
```bash
npm i
npm run dev
```
פתח בדפדפן את הכתובת שמודפסת (בד"כ http://localhost:5173).

## 🧩 טכנולוגיות
- React 18 + Vite
- MUI v5 (Material UI), @emotion
- RTL דרך stylis-plugin-rtl
- React Router v6

## 🗺️ עמודים
בית, אודות, מסלולים, מאמנים, גלריה, לוח זמנים, מחירים, שאלות, צור קשר, רישום.

## 🎨 התאמות עיצוב
ערוך צבעים/טיפוגרפיה ב-`src/theme.js`. תכנים דינמיים ב-`src/data/site.js`.

## 🚀 פריסה ל‑Vercel (SPA)
באפליקציות SPA (React Router), רענון על כתובת עומק עלול להחזיר 404 ללא כללי ניתוב. הוספנו קובץ `vercel.json` שמבצע rewrite לכל נתיב ללא סיומת קובץ אל `/`.

קובץ: `vercel.json`

```
{
	"rewrites": [
		{ "source": "/((?!.*\\.).*)", "destination": "/" }
	]
}
```

כך Vercel ישרת את `index.html` לכל כתובת SPA (למשל `/about`, `/programs`), בעוד שנכסי סטטיים (למשל `/img/logo.png`) יוגשו כרגיל.
