import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReporter implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis output</h1>
      </div>
      <div>${report}</div>
    `;
    fs.writeFileSync(this.fileName, html)
  }
}