export default function auth({ next, router }) {
    if (!localStorage.getItem('client_access_token')) {
      return router.push({ name: 'client_login' });
    }
  
    return next();
  }