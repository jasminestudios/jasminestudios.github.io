## Section 1. General Assessment
### 1. Verify insured identity
* **_(Rule)_** **Insured name** and **NRIC** of the documents must match with the policy record of **IL**.

### 2. Verify policy status
> **_Note_** Refer **policy status** of **IL**
* **_(Rule)_** **Accident date** must be before the lapse date if the **policy status** is **lapsed**.
* **_(Rule)_** **Accident date** must be after the **reinstatement date** if the **policy status** is **reinstated**.
* **_(Rule)_** Otherwise, **Policy status** must be **in force**.
         
### 3. Validate coverage and exclusion
#### Step 1. Benefit scope
> **_Note_** Refer **benefit type** (aka **coverage code**) of the policy record of **IL**
* **_(Rule)_** If **benefit type** is in following code list, the benefit is hospitalization and illness-related. Therefore, the claim is out-of-scope and fails the validation.
* **_(Rule)_** If **benefit type** is in following code list, the benefit is accident related. Therefore the claim is in-scope and passes the validation.
* **_(Rule)_** If **benefit type** is in following code list, the benefit is TCM. Therefore the claim is in-scope and passes the validation.

#### Step 2. Injury validation
> **_Note_** Refer **diagnosis** of the claim and medical evidences.

> **_Note_** Do NOT refer **claim cause**
* **_(Rule)_** **Injury** of the claim should be bodily injury sustained in an accident and not due to illness and disease
* **_(Rule)_** Food poisoning, gastronenteritis, bitten by insect causing allergic reaction, dengue fever, or any other stated in customer's policy are accepted as an injury and pass the validation

#### Step 3. Eligibility check
* (Note) Refer **diagnosis** of the claim
* (Rule) **Diagnosis** must not be included in *General Exclusion* in *Appendix*. If **diagnosis** falls within *General Exclusion*, it fails the validation. 

         > **Example**
         > If *weekly indemnity* is covered and MC shows unfit for work and school for X days, it passes the validation.

         > **Example**
         > If claim includes outpatient and inpatient treatment for accident injury (within 365 days) but medical reimbursement is not covered, it fails the validation.

#### Step 4. Underwriting exclusions
* (Note) Refer the *exclusion remarks*. e.g. right hand and left knee, loss of hearing
* (Note) Ignore *exclusion codes* and *description* of *IL*
* (Rule) If *exclusion* applies to the claimed benefit type, if fails the validation.

#### Step 5. Accident date validity
* (Rule) *Accident date* must be before *paid to date*

#### Step 6. Coverage amount

### 4. Verify dispatch address
* (Rule) If *postcode* starts with "UD", it fails the validation and recommend address update

### 5. Blacklist
* (Rule) If *blacklist indicator* is "+", medical report must be included in the documents submitted in the claim. If not, it fails the validation and recommends requesting medical report from customer. If medical report was submitted, perform *Section 3 Supporting Document Validation* 

### 6. Verify barred hospital
* (Note) Refer *category* of the barred hospital verification
* (Rule) If *category* is "1", it fails validation.
* (Rule) If *category* is "2", it fails validation.
* (Rule) If *category* is "3", medical report must be included in the documents submitted in the claim. If not, it fails the validation and recommends requesting medical report from customer. If medical report was submitted, perform *Section 3 Supporting Document Validation* 
* (Rule) If *category* is "4", TCM questionnaire must be included in the documents submitted in the claim. If not, it fails the validation and recommends requesting TCM questionnaire from customer. If TCM questionnaire was submitted, perform *Section 3 Supporting Document Validation* 


### 7. Validate passerby
### 8. Verify doctor and clinic
