import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAccount } from 'wagmi';

const KYC = () => {
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    phoneNumber: '',
    email: '',
    
    // Address Information
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    
    // Identity Verification
    idType: '',
    idNumber: '',
    idFrontImage: null,
    idBackImage: null,
    selfieImage: null,
    
    // Financial Information
    occupation: '',
    employer: '',
    annualIncome: '',
    sourceOfFunds: '',
    investmentExperience: '',
    
    // Compliance
    isPoliticallyExposed: false,
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToRiskDisclosure: false
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    idFront: null,
    idBack: null,
    selfie: null
  });

  const [verificationStatus, setVerificationStatus] = useState('pending'); // pending, verified, rejected

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, file) => {
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setUploadedFiles(prev => ({
        ...prev,
        [field]: file
      }));
      setFormData(prev => ({
        ...prev,
        [`${field}Image`]: file
      }));
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('KYC Data:', formData);
    alert('KYC application submitted successfully! We will review your information within 24-48 hours.');
    setVerificationStatus('pending');
  };

  const renderStepIndicator = () => (
    <div className="kyc-step-indicator">
      {[1, 2, 3, 4, 5].map(step => (
        <div key={step} className={`step-item ${currentStep >= step ? 'active' : ''}`}>
          <div className="step-number">{step}</div>
          <div className="step-label">
            {step === 1 && 'Personal'}
            {step === 2 && 'Address'}
            {step === 3 && 'Identity'}
            {step === 4 && 'Financial'}
            {step === 5 && 'Review'}
          </div>
        </div>
      ))}
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="kyc-form-section">
      <h3 className="section-title">Personal Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nationality *</label>
          <select
            value={formData.nationality}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
            required
          >
            <option value="">Select Nationality</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="JP">Japan</option>
            <option value="SG">Singapore</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderAddressInfo = () => (
    <div className="kyc-form-section">
      <h3 className="section-title">Address Information</h3>
      <div className="form-grid">
        <div className="form-group full-width">
          <label>Street Address *</label>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={(e) => handleInputChange('streetAddress', e.target.value)}
            placeholder="123 Main Street, Apt 4B"
            required
          />
        </div>
        <div className="form-group">
          <label>City *</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="New York"
            required
          />
        </div>
        <div className="form-group">
          <label>State/Province *</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            placeholder="NY"
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code *</label>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) => handleInputChange('postalCode', e.target.value)}
            placeholder="10001"
            required
          />
        </div>
        <div className="form-group">
          <label>Country *</label>
          <select
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            required
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="JP">Japan</option>
            <option value="SG">Singapore</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderIdentityVerification = () => (
    <div className="kyc-form-section">
      <h3 className="section-title">Identity Verification</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>ID Type *</label>
          <select
            value={formData.idType}
            onChange={(e) => handleInputChange('idType', e.target.value)}
            required
          >
            <option value="">Select ID Type</option>
            <option value="passport">Passport</option>
            <option value="drivers_license">Driver's License</option>
            <option value="national_id">National ID Card</option>
          </select>
        </div>
        <div className="form-group">
          <label>ID Number *</label>
          <input
            type="text"
            value={formData.idNumber}
            onChange={(e) => handleInputChange('idNumber', e.target.value)}
            placeholder="Enter ID number"
            required
          />
        </div>
      </div>
      
      <div className="file-upload-section">
        <div className="upload-grid">
          <div className="upload-item">
            <label>ID Front Image *</label>
            <div className="file-upload-area">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload('idFront', e.target.files[0])}
                id="idFront"
              />
              <label htmlFor="idFront" className="upload-label">
                {uploadedFiles.idFront ? (
                  <span className="file-name">{uploadedFiles.idFront.name}</span>
                ) : (
                  <>
                    <i className="fa fa-cloud-upload"></i>
                    <span>Upload Front of ID</span>
                  </>
                )}
              </label>
            </div>
          </div>
          
          <div className="upload-item">
            <label>ID Back Image *</label>
            <div className="file-upload-area">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload('idBack', e.target.files[0])}
                id="idBack"
              />
              <label htmlFor="idBack" className="upload-label">
                {uploadedFiles.idBack ? (
                  <span className="file-name">{uploadedFiles.idBack.name}</span>
                ) : (
                  <>
                    <i className="fa fa-cloud-upload"></i>
                    <span>Upload Back of ID</span>
                  </>
                )}
              </label>
            </div>
          </div>
          
          <div className="upload-item">
            <label>Selfie with ID *</label>
            <div className="file-upload-area">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload('selfie', e.target.files[0])}
                id="selfie"
              />
              <label htmlFor="selfie" className="upload-label">
                {uploadedFiles.selfie ? (
                  <span className="file-name">{uploadedFiles.selfie.name}</span>
                ) : (
                  <>
                    <i className="fa fa-camera"></i>
                    <span>Upload Selfie with ID</span>
                  </>
                )}
              </label>
            </div>
          </div>
        </div>
        <p className="upload-note">
          Please ensure all images are clear, well-lit, and show all corners of your ID. 
          Maximum file size: 5MB per image.
        </p>
      </div>
    </div>
  );

  const renderFinancialInfo = () => (
    <div className="kyc-form-section">
      <h3 className="section-title">Financial Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Occupation *</label>
          <input
            type="text"
            value={formData.occupation}
            onChange={(e) => handleInputChange('occupation', e.target.value)}
            placeholder="Software Engineer"
            required
          />
        </div>
        <div className="form-group">
          <label>Employer</label>
          <input
            type="text"
            value={formData.employer}
            onChange={(e) => handleInputChange('employer', e.target.value)}
            placeholder="Company Name"
          />
        </div>
        <div className="form-group">
          <label>Annual Income *</label>
          <select
            value={formData.annualIncome}
            onChange={(e) => handleInputChange('annualIncome', e.target.value)}
            required
          >
            <option value="">Select Income Range</option>
            <option value="under_25k">Under $25,000</option>
            <option value="25k_50k">$25,000 - $50,000</option>
            <option value="50k_100k">$50,000 - $100,000</option>
            <option value="100k_250k">$100,000 - $250,000</option>
            <option value="250k_500k">$250,000 - $500,000</option>
            <option value="over_500k">Over $500,000</option>
          </select>
        </div>
        <div className="form-group">
          <label>Source of Funds *</label>
          <select
            value={formData.sourceOfFunds}
            onChange={(e) => handleInputChange('sourceOfFunds', e.target.value)}
            required
          >
            <option value="">Select Source</option>
            <option value="salary">Salary/Employment</option>
            <option value="business">Business Income</option>
            <option value="investments">Investment Returns</option>
            <option value="inheritance">Inheritance</option>
            <option value="savings">Personal Savings</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Investment Experience *</label>
          <select
            value={formData.investmentExperience}
            onChange={(e) => handleInputChange('investmentExperience', e.target.value)}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="beginner">Beginner (0-1 years)</option>
            <option value="intermediate">Intermediate (1-5 years)</option>
            <option value="experienced">Experienced (5+ years)</option>
            <option value="expert">Expert (10+ years)</option>
          </select>
        </div>
      </div>
      
      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.isPoliticallyExposed}
            onChange={(e) => handleInputChange('isPoliticallyExposed', e.target.checked)}
          />
          <span className="checkmark"></span>
          I am a Politically Exposed Person (PEP) or related to one
        </label>
      </div>
    </div>
  );

  const renderReviewSubmit = () => (
    <div className="kyc-form-section">
      <h3 className="section-title">Review & Submit</h3>
      
      <div className="review-section">
        <div className="review-item">
          <h4>Personal Information</h4>
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phoneNumber}</p>
          <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
        </div>
        
        <div className="review-item">
          <h4>Address</h4>
          <p>{formData.streetAddress}</p>
          <p>{formData.city}, {formData.state} {formData.postalCode}</p>
          <p>{formData.country}</p>
        </div>
        
        <div className="review-item">
          <h4>Identity Verification</h4>
          <p><strong>ID Type:</strong> {formData.idType}</p>
          <p><strong>Documents:</strong> {Object.values(uploadedFiles).filter(Boolean).length} files uploaded</p>
        </div>
        
        <div className="review-item">
          <h4>Financial Information</h4>
          <p><strong>Occupation:</strong> {formData.occupation}</p>
          <p><strong>Annual Income:</strong> {formData.annualIncome}</p>
          <p><strong>Source of Funds:</strong> {formData.sourceOfFunds}</p>
        </div>
      </div>
      
      <div className="compliance-section">
        <h4>Legal Agreements</h4>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              required
            />
            <span className="checkmark"></span>
            I agree to the <a href="#" target="_blank">Terms of Service</a>
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.agreeToPrivacy}
              onChange={(e) => handleInputChange('agreeToPrivacy', e.target.checked)}
              required
            />
            <span className="checkmark"></span>
            I agree to the <a href="#" target="_blank">Privacy Policy</a>
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.agreeToRiskDisclosure}
              onChange={(e) => handleInputChange('agreeToRiskDisclosure', e.target.checked)}
              required
            />
            <span className="checkmark"></span>
            I acknowledge the <a href="#" target="_blank">Risk Disclosure Statement</a>
          </label>
        </div>
      </div>
    </div>
  );

  if (!isConnected) {
    return (
      <div className="kyc-container">
        <div className="kyc-not-connected">
          <div className="not-connected-content">
            <i className="fa fa-wallet" style={{fontSize: '4rem', color: 'var(--neon-blue)', marginBottom: '2rem'}}></i>
            <h2>Wallet Connection Required</h2>
            <p>Please connect your wallet to access the KYC verification process.</p>
            <p>This ensures your identity is linked to your blockchain address for compliance purposes.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="kyc-container">
      <div className="kyc-header">
        <h1 className="kyc-title">KYC Verification</h1>
        <p className="kyc-subtitle">
          Complete your Know Your Customer verification to access premium features and higher transaction limits.
        </p>
        <div className="wallet-info">
          <span className="wallet-label">Connected Wallet:</span>
          <span className="wallet-address">{address}</span>
        </div>
      </div>

      <div className="kyc-form-container">
        {renderStepIndicator()}
        
        <form onSubmit={handleSubmit} className="kyc-form">
          {currentStep === 1 && renderPersonalInfo()}
          {currentStep === 2 && renderAddressInfo()}
          {currentStep === 3 && renderIdentityVerification()}
          {currentStep === 4 && renderFinancialInfo()}
          {currentStep === 5 && renderReviewSubmit()}
          
          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="nav-button prev-button">
                <i className="fa fa-arrow-left"></i> Previous
              </button>
            )}
            
            {currentStep < 5 ? (
              <button type="button" onClick={nextStep} className="nav-button next-button">
                Next <i className="fa fa-arrow-right"></i>
              </button>
            ) : (
              <button 
                type="submit" 
                className="submit-button"
                disabled={!formData.agreeToTerms || !formData.agreeToPrivacy || !formData.agreeToRiskDisclosure}
              >
                <i className="fa fa-check"></i> Submit KYC Application
              </button>
            )}
          </div>
        </form>
      </div>
      
      <div className="kyc-info-panel">
        <h3>Why KYC is Required</h3>
        <ul>
          <li><i className="fa fa-shield"></i> Regulatory compliance and legal protection</li>
          <li><i className="fa fa-lock"></i> Enhanced security for your account</li>
          <li><i className="fa fa-chart-line"></i> Access to higher transaction limits</li>
          <li><i className="fa fa-star"></i> Premium features and exclusive opportunities</li>
          <li><i className="fa fa-globe"></i> International trading capabilities</li>
        </ul>
        
        <div className="processing-time">
          <h4>Processing Time</h4>
          <p>Most applications are reviewed within <strong>24-48 hours</strong>. 
          You'll receive an email notification once your verification is complete.</p>
        </div>
      </div>
    </div>
  );
};

export default KYC;