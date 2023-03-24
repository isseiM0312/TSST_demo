import Link from 'next/link'

export function StartTest() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#007297',
      }}
    >
      <h1 style={{ color: '#fff', fontSize: '3rem' }}>テストを開始する</h1>
      <Link href="/phone" style={{
            textDecoration: 'none',
            }}>
        <div
          style={{
            backgroundColor: '#00AFAA',
            color: '#fff',
            padding: '1rem',
            marginTop: '2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            
          }}
        >
          スタート
          
        </div>
        
      </Link>
    </div>
  )
}
