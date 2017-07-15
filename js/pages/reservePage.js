const applicantName = '姓名';
const phoneNum = '行動電話';
const applicantGender = '性別';
const clientGender = '欲入住者性別';
const clientAge = '欲入住者年齡';
const clientDisease = '欲入住者目前罹患疾病';
const clientCurrentPlace = '欲入住者目前安置場所';
const specialTreatment = '管路留置或特殊需求';
const specialTreatment_1 = '鼻胃管';
const specialTreatment_2 = '導尿管';
const specialTreatment_3 = '氣切管';
const specialTreatment_4 = '造廔口';
const specialTreatment_5 = '傷口護理';
const specialTreatment_6 = '呼吸照護';
const inquirySubject = '詢問項目';
const inquirySubject_1 = '收費項目';
const inquirySubject_2 = '費用細節';
const inquirySubject_3 = '醫療護理';
const inquirySubject_4 = '復健內容';
const inquirySubject_5 = '預約參觀';
const inquirySubject_6 = '入住準備事項';

const reservePage = `
  <form id="reserveForm" role="form" data-toggle="validator">
  <div class="col-md-8 col-md-offset-2">
    <div class="form-group col-md-4">
      <label for="applicantName">${applicantName}*</label>
      <input required type="text" class="form-control" id="applicantName" placeholder="王小明">
    </div>
    <div class="form-group col-md-4">
      <label for="phoneNum">${phoneNum}</label>
      <input required type="tel" class="form-control" id="phoneNum" placeholder="09XXXXXXXX">
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-4">
      <label>${applicantGender}</label><br/>
      <div class="radio-inline">
        <label for="applicantGenderMale" class="radio inline control-label">
          <input type="radio" name="applicantGender" id="applicantGenderMale" value="male">
          男
        </label>
      </div>
      <div class="radio-inline">
        <label for="applicantGenderFemale" class="radio inline control-label">
          <input type="radio" name="applicantGender" id="applicantGenderFemale" value="female">
          女
        </label>
      </div>
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-4">

      <input type="text" class="form-control" id="clientAge" placeholder="${clientAge}">
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-4">
      <input type="text" class="form-control" id="clientDisease" placeholder="${clientDisease}">
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-4">
      <input type="text" class="form-control" id="clientCurrentPlace" placeholder="${clientCurrentPlace}">
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-8">
      <label>${specialTreatment}</label><br/>
      <div class="checkbox-inline">
        <label for="specialTreatment_1" class="checkbox inline control-label">
          <input type="checkbox" name="specialTreatment" id="specialTreatment_1" value="1">
          ${specialTreatment_1}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="specialTreatment_2" class="checkbox inline control-label">
          <input type="checkbox" name="specialTreatment" id="specialTreatment_2" value="2">
          ${specialTreatment_2}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="specialTreatment_3" class="checkbox inline control-label">
          <input type="checkbox" name="specialTreatment" id="specialTreatment_3" value="3">
          ${specialTreatment_3}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="specialTreatment_4" class="checkbox inline control-label">
          <input type="checkbox" name="specialTreatment" id="specialTreatment_4" value="4">
          ${specialTreatment_4}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="specialTreatment_5" class="checkbox inline control-label">
          <input type="checkbox" name="specialTreatment" id="specialTreatment_5" value="5">
          ${specialTreatment_5}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="specialTreatment_6" class="checkbox inline control-label">
          <input type="checkbox" name="specialTreatment" id="specialTreatment_6" value="6">
          ${specialTreatment_6}
        </label>
      </div>
      <div class="help-block with-errors"></div>
    </div>

    <div class="form-group col-md-4">
      <label>${clientGender}</label><br/>
      <div class="radio-inline">
        <label for="clientGenderMale" class="radio inline control-label">
          <input type="radio" name="clientGender" id="clientGenderMale" value="male">
          男
        </label>
      </div>
      <div class="radio-inline">
        <label for="clientGenderFemale" class="radio inline control-label">
          <input type="radio" name="clientGender" id="clientGenderFemale" value="female">
          女
        </label>
      </div>
      <div class="help-block with-errors"></div>
    </div>
     <div class="form-group col-md-12">
      <label>${inquirySubject}</label><br/>
      <div class="checkbox-inline">
        <label for="inquirySubject_1" class="checkbox inline control-label">
          <input type="checkbox" name="inquirySubject" id="inquirySubject_1" value="1">
          ${inquirySubject_1}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="inquirySubject_2" class="checkbox inline control-label">
          <input type="checkbox" name="inquirySubject" id="inquirySubject_2" value="2">
          ${inquirySubject_2}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="inquirySubject_3" class="checkbox inline control-label">
          <input type="checkbox" name="inquirySubject" id="inquirySubject_3" value="3">
          ${inquirySubject_3}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="inquirySubject_4" class="checkbox inline control-label">
          <input type="checkbox" name="inquirySubject" id="inquirySubject_4" value="4">
          ${inquirySubject_4}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="inquirySubject_5" class="checkbox inline control-label">
          <input type="checkbox" name="inquirySubject" id="inquirySubject_5" value="5">
          ${inquirySubject_5}
        </label>
      </div>
      <div class="checkbox-inline">
        <label for="inquirySubject_6" class="checkbox inline control-label">
          <input type="checkbox" name="inquirySubject" id="inquirySubject_6" value="6">
          ${inquirySubject_6}
        </label>
      </div>
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-6">
      <textarea class="form-control" rows="3" placeholder="備註..."></textarea>
      <div class="help-block with-errors"></div>
    </div>
    <div class="form-group col-md-6">
      <button type="submit" id="submitBtn" class="btn btn-success col-md-4">確定送出</button>
      <button type="button" class="btn btn-danger col-md-4 col-md-offset-1">重寫</button>
    </div>
  </div>
  </form>
`;

// XXX: CAPCHA