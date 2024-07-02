'use client';

const TableOfContents = () => {
  return (
    <div className="bg-[#b2c3ee] py-16">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-8">
          <div className="text-[5rem] font-bold text-orange-500">00</div>
          <div className="ml-4 text-[3rem] font-bold text-white">CONTENTS</div>
        </div>
        <div className="flex justify-end mr-8">
          <div className="grid grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-[3rem] font-bold text-orange-500">01</div>
              <div className="text-[1.5rem] font-bold mb-2">INTRODUCTION</div>
              <div className="text-[1rem]">
                <p>01. Purpose of Guidelines</p>
                <p>02. Stakeholders</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-orange-500">03</div>
              <div className="text-[1.5rem] font-bold mb-2">TRAVEL</div>
              <div className="text-[1rem]">
                <p>04. Air Travel</p>
                <p>05. Lodging</p>
                <p>06. Meals</p>
                <p>07. Miscellaneous</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-orange-500">12</div>
              <div className="text-[1.5rem] font-bold mb-2">EXPENSES</div>
              <div className="text-[1rem]">
                <p>12. Entertainment</p>
                <p>13. Professional Fees</p>
                <p>14. Supplies</p>
                <p>15. Telephone</p>
                <p>16. Utilities</p>
                <p>17. Misc. Expenses</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-orange-500">18</div>
              <div className="text-[1.5rem] font-bold mb-2">GENERAL INFO</div>
              <div className="text-[1rem]">
                <p>18. General Info</p>
                <p>19. Graphics</p>
                <p>20. Legal</p>
                <p>21. Personal Costs</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-orange-500">24</div>
              <div className="text-[1.5rem] font-bold mb-2">INDEX</div>
              <div className="text-[1rem]">
                <p>22. Index</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
