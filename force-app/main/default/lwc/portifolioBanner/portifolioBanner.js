import { LightningElement, wire} from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'


export default class PortfolioBanner extends LightningElement {

    linkedinUrl = "https://www.linkedin.com/in/matheus-hugolini/"
    githubUrl = "https://github.com/mathugolini"
    trailheadUrl = "https://www.salesforce.com/trailblazer/mathugolini"

    userPic = `${PortfolioAssets}/PortfolioAssets/matheusLogo.png`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`

    recordId = 'a01Hu00000x9SiYIAU'
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION]})
    portfolioHandler({data, error}) {
        if(data) {
            console.log("record Data", JSON.stringify(data))
        } 
        if (error) {
            console.error("error", error)
        }
    }
}