// @ts-nocheck
import { useEffect, useState } from 'react';
import csvData from '../data/megasheet';
import Papa from 'papaparse';

function useExcelData() {
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState([]);
  const [parsedCsvData, setParsedCsvData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const parsedCSV = Papa.parse(csvData, {
      header: true,
      complete: (results: any) => {
        setParsedCsvData(results.data);
      },
    });
    const header = Papa.parse(csvData, {
      complete: (results: any) => {
        setHeader(results.data);
      },
    });
    setLoading(false);
  }, []);

  return { parsedCsvData, header, loading };
}

export default useExcelData;
