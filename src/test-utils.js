import { render } from "@testing-library/react";
import { useState, useEffect } from "react";

function ThemeProvider({ children }) {
  return <div className="theme-provider">{children}</div>;
}

function I18nProvider({ children }) {
  return <div className="i18n-provider">{children}</div>;
}

function AllProviders({ children }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};
