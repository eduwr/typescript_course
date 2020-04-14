import { MatchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);

    this.outputTarget.print(output);
  }
}
