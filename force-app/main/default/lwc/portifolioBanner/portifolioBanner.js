import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioBanner extends LightningElement {

    linkedinUrl = "https://www.linkedin.com/in/matheus-hugolini/"
    githubUrl = "https://github.com/mathugolini"
    trailheadUrl = "https://www.salesforce.com/trailblazer/mathugolini"

    userPic = `${PortfolioAssets}/PortfolioAssets/matheusLogo.png`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
}