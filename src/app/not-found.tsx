export default function NotFound() {
  return (
    <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'}}>
      <h1 style={{
          padding: '20px',
          borderRight: '1px solid gray',
          marginRight: '20px'
      }}>404</h1>
      <span>This page could not be found.</span>
    </main>
  );
}
