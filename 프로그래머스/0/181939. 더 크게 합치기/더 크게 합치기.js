function solution(a, b) {
    const solutionA = a.toString() + b.toString();
    const solutionB = b.toString() + a.toString();
    return solutionA-solutionB > 0 ? Number(solutionA) : Number(solutionB);
}