import { store } from '../Store/store';

function clearCookies() {
  if (typeof document === 'undefined') return;

  document.cookie.split(';').forEach(cookie => {
    const name = cookie.split('=')[0].trim();

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
  });
}

function clearLocalStorage() {
     if (typeof window === 'undefined') return;

  localStorage.clear();
  sessionStorage.clear();
} 

function clearReduxStore() {
    if (!store?.dispatch) return;

  store.dispatch({ type: 'app/reset' });
}

export function clearUserData() {
     try {
    clearCookies();
    clearLocalStorage();
    clearReduxStore();
  } catch (error) {
    console.error('[clearUserData] failed:', error);
  }
}

