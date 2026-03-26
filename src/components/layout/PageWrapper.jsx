// src/components/layout/PageWrapper.jsx
export default function PageWrapper({ children }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {children}
    </div>
  );
}