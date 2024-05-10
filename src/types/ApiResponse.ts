export type ApiResponse = {
    corrected_html: string
    corrected_errors: Array<string>
    recommendations: Array<string>
    score: number
}