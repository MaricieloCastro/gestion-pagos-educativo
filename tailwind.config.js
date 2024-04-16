/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "login-grid": "1fr 2fr",
      },
      gridTemplateRows: {
        "caja-contenido": "1fr 5fr",
      },
      width: {
        "login-caja": "350px",
        "login-header": "220px",
        "date-listas": "130px",
      },
      height: {
        "height-listas": "40px",
      },
      minWidth: {
        "login-minWidth": "600px",
        "login-minWidth-responsive": "400px",
        "login-minWidth-global": "600px",
      },
      padding: {
        "caja-contenido": "15px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        "blue-claro": "#003862",
        "blue-oscuro": "#001F36",
        "blue-claro+": "#004B82",
        "blue-hover": "#005BA0",
        "white-cabecera": "#D9D9D9",
        "white-linea": "#C1C1C1",
        "white-texto": "#D9D9D9",
        "red-boton": "#C42727",
        "red-boton-hover": "#DF3030",
        "green-boton": "#1EC468",
        "green-boton-hover": "#1DAF5E",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
