const medicalSection = `
  <h2>醫療護理 <span>Medical service Health care</span></h2>
  <ol>
    <li>特約醫院醫生每月巡診開藥，醫療諮詢。</li>
    <li>特約居家護理師每兩週更換管路及護理服務。</li>
    <li>約聘營養師予飲食照顧。</li>
    <li>專任護理人員掌握住民身體狀況維護住民健康。</li>
    <li>簡易復健：由特約復健診所每週3次，派交通車為住民提供治療，強化住民身體機能。</li>
    <li>醫院藥劑師提供藥物諮詢</li>
    <li>收費標準：全日托養護費兩萬五千元整（不含雜項費用個人用品及因病轉送醫院治療所需費用）</li>
  </ol>
`;
const nursingSection = `
  <h2>護理照護 <span>Nursing life Attendance</span></h2>
  <ul>
    <li>護理照護：使住民獲得完善的生活及護理照顧，配置專職護理人員二十四小時照顧住民生活起居及身心健康。</li>
    <li>生活照顧：護理人員照顧住民生活飲食起居，協助住民獲得良好生活品質；每日安排各項團體活動並定期舉辦慶生會，調劑住民生活。</li>
  </ul>
`;
const resourceSection = `
  <h2>資源應用 <span>Community Resources Social worker service</span></h2>
  <ul>
    <li>社工服務：特約社工每週至中心給予住民心理輔導、心理調劑及關懷；規劃辦理社民之各項休閒娛樂活動、辦理住民與親屬之聯歡活動讓住民獲得更愉快的生活調劑。</li>
    <li>社區資源應用：音樂撫療團隊、狗醫師團隊、大專院校夏令營、淡水校會志願服務人員予以宗教支持。</li>
  </ul>
`;
const servicePage = `
  <div class="service_items">
    <ul>
    	<li class="item_list" onclick="switchSection('medical')">醫療與護理</li>
    	<li class="item_list" onclick="switchSection('nursing')">照顧的方式</li>
		  <li class="item_list" onclick="switchSection('resource')">資源的應用</li>
    </ul>
    <div id="serviceContent" class="service_content"></div>
  </div>
`;