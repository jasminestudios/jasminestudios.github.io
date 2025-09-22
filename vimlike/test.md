## Section 1. General Assessment
### 1. Verify insured identity
* (Rule) **Insured name** and **NRIC** of the documents must match with the policy record of **IL**.

### 2. Verify policy status
* (Note) Refer **policy status** of **IL**
* (Rule) **Accident date** must be before the lapse date if the **policy status** is **lapsed**.
* (Rule) **Accident date** must be after the **reinstatement date** if the **policy status** is **reinstated**.
* (Rule) Otherwise, **Policy status** must be **in force**.
         
### 3. Validate coverage and exclusion
#### Step 1. Benefit scope
* (Note) Refer **benefit type** (aka **coverage code**) of the policy record of **IL**
* (Rule) If **benefit type** is in following code list, the benefit is hospitalization and illness-related. Therefore, the claim is out-of-scope and fails the validation.
* (Rule) If **benefit type** is in following code list, the benefit is accident related. Therefore the claim is in-scope and passes the validation.
* (Rule) If **benefit type** is in following code list, the benefit is TCM. Therefore the claim is in-scope and passes the validation.

#### Step 2. Injury validation
* (Note) Refer **diagnosis** of the claim and medical evidences.
* (Note) Do NOT refer **claim cause**
* (Rule) **Injury** of the claim should be bodily injury sustained in an accident and not due to illness and disease
* (Rule) Food poisoning, gastronenteritis, bitten by insect causing allergic reaction, dengue fever, or any other stated in customer's policy are accepted as an injury and pass the validation

#### Step 3. Eligibility check
* (Note) Refer **diagnosis** of the claim
* (Rule) **Diagnosis** must not be included in *General Exclusion* in *Appendix*. If **diagnosis** falls within *General Exclusion*, it fails the validation. 
> **Example**
> If *weekly indemnity* is covered and MC shows unfit for work and school for X days, it passes the validation.
> If claim includes outpatient and inpatient treatment for accident injury (within 365 days) but medical reimbursement is not covered, it fails the validation.

### 4. Verify dispatch address
### 5. Verify barred hospital
### 6. Validate passerby
### 7. Verify doctor and clinic
