const db = require('../database');

describe('Crear la conexión con la base de datos', () => {
  test('Probar la conexión con la base de datos', () => {
    expect(db.models).toBeTruthy();
  });
  test('Conexion con tabla Worker', () => {
    expect(db.models).toHaveProperty('Worker');
  });
  test('Conexion con tabla Access', () => {
    expect(db.models).toHaveProperty('Access');
  });
});
