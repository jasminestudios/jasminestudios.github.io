## Section 1. General Assessment
### 1. Insured identity verification
* **_(Rule)_** **Insured name** and **NRIC** of the documents must match with the policy record of **IL**.

### 2. Policy status verification
* **_(Note)_** Refer **policy status** of **IL**
* **_(Rule)_** **Accident date** must be before the **lapse date** if the **policy status** is **lapsed**. Otherwise, it FAILS validation.
* **_(Rule)_** **Accident date** must be after the **reinstatement date** if the **policy status** is **reinstated**. Otherwise, it FAILS validation.
* **_(Rule)_** If **Policy status** is **in force**, it PASSES validation.
         
### 3. Coverage and exclusion validation
#### Step 1. Benefit scope validation
* **_(Note)_** Refer **benefit type** (aka **coverage code**) of the policy record of **IL**
* **_(Rule)_** If **benefit type** is in following code list, the benefit is hospitalization and illness-related. Therefore, the claim is out-of-scope and FAILS validation.
* **_(Rule)_** If **benefit type** is in following code list, the benefit is accident related. Therefore the claim is in-scope and PASSES validation.
* **_(Rule)_** If **benefit type** is in following code list, the benefit is TCM. Therefore the claim is in-scope and PASSES validation.

#### Step 2. Injury validation
* **_(Note)_** Refer **diagnosis** of the claim and medical evidences.
* **_(Note)_** Do NOT refer **claim cause**
* **_(Rule)_** **Injury** of the claim should be bodily injury sustained in an accident and not due to illness and disease
* **_(Rule)_** Food poisoning, gastronenteritis, bitten by insect causing allergic reaction, dengue fever, or any other stated in customer's policy are accepted as an injury and it PASSES the validation

#### Step 3. Eligibility check
* **_(Note)_** Refer **diagnosis** of the claim
* **_(Rule)_** **Diagnosis** must not be included in *General Exclusion* in *Appendix*. If **diagnosis** falls within *General Exclusion*, it FAILS validation. 

  > **Example**
  > If *weekly indemnity* is covered and MC shows unfit for work and school for X days, it PASSES validation.

  > **Example**
  > If claim includes outpatient and inpatient treatment for accident injury (within 365 days) but medical reimbursement is not covered, it FAILS validation.

#### Step 4. Underwriting exclusions
* **_(Note)_** Refer the *exclusion remarks*. e.g. right hand and left knee, loss of hearing
* **_(Note)_** Ignore **exclusion codes** and **description** of **IL**
* (Rule) If **exclusion** applies to the claimed benefit type, if FAILS validation.

#### Step 5. Accident date validity
* **_(Rule)_** **Accident date** must be before **paid to date**

#### Step 6. Coverage amount

### 4. Dispatch address verification
* **_(Rule)_** If **postcode** starts with "UD", it FAILS validation and recommends address update

### 5. Blacklist
* **_(Rule)_** If **blacklist indicator** is "+", medical report must be included in the documents submitted in the claim. If not, it FAILS validation and recommends requesting medical report from customer. If medical report was submitted, perform *Section 3 Supporting Document Validation* 

### 6. Barred hospital validation
* **_(Note)_** Refer **category** of the barred hospital verification
* **_(Rule)_** If **category** is "1", it FAILS validation.
* **_(Rule)_** If **category** is "2", it FAILS validation.
* **_(Rule)_** If **category** is "3", medical report must be included in the documents submitted in the claim. If not, it FAILS validation and recommends requesting medical report from customer. If medical report was submitted, perform *Section 3 Supporting Document Validation* 
* **_(Rule)_** If **category** is "4", TCM questionnaire must be included in the documents submitted in the claim. If not, it FAILS validation and recommends requesting TCM questionnaire from customer. If TCM questionnaire was submitted, perform *Section 3 Supporting Document Validation* 


### 7. Passerby validation
### 8. Doctor and clinic verification
