import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="container">
      <div class="card">
        <h1 class="gradient-text">Hello World</h1>
        <p class="subtitle">Built with Angular</p>
        <div class="badge">v19.x</div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(circle at top left, #1a1a2e, #16213e);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      overflow: hidden;
    }

    .card {
      text-align: center;
      padding: 3rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      animation: float 6s ease-in-out infinite;
    }

    .gradient-text {
      font-size: 4rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      letter-spacing: -2px;
    }

    .subtitle {
      color: #94a3b8;
      font-size: 1.25rem;
      margin-top: 0.5rem;
    }

    .badge {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.5rem 1rem;
      background: rgba(58, 123, 213, 0.2);
      color: #60a5fa;
      border-radius: 99px;
      font-size: 0.875rem;
      font-weight: 600;
      border: 1px solid rgba(58, 123, 213, 0.3);
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `],
})
export class App {
  protected readonly title = signal('Hello World');
}
