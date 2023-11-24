export default (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
      const { username, password } = req.body;
  
      // Simulate basic login logic
      const user = db.usuarios.find(u => u.username === username && u.password === password);
  
      if (user) {
        // Successful login
        return res.status(200).json({ id: user.id, username: user.username, name: user.name });
      } else {
        // Failed login
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  
    // Continue to JSON Server router
    next();
  };