// UTM parameter tracking utility

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  timestamp?: string;
}

const UTM_STORAGE_KEY = 'diligence_utm_params';

export const captureUTMParams = (): UTMParams => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};

  // Capture all UTM parameters
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key as keyof UTMParams] = value;
    }
  });

  // Add timestamp if any UTM params exist
  if (Object.keys(utmParams).length > 0) {
    utmParams.timestamp = new Date().toISOString();
    
    // Store in localStorage
    try {
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
    } catch (e) {
      console.warn('Failed to store UTM params:', e);
    }
  }

  return utmParams;
};

export const getStoredUTMParams = (): UTMParams => {
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.warn('Failed to retrieve UTM params:', e);
    return {};
  }
};

export const clearUTMParams = (): void => {
  try {
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear UTM params:', e);
  }
};
