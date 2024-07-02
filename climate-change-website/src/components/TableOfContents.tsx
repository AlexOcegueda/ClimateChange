'use client';

const TableOfContents = () => {
  return (
    <div className="bg-[#b2c3ee] py-16">
      <div className="container mx-auto text-center">
        <div className="relative flex justify-center mb-8">
          <div className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white p-4">00</div>
          <div className="absolute left-0 right-0 bg-white h-full -z-10" style={{ height: '6rem' }}></div>
          <div className="ml-4 text-[5rem] font-bold text-[#b2c3ee] z-10 bg-white flex-grow flex items-center pl-5">CONTENTS</div>
        </div>
        <div className="flex justify-end">
          <div className="grid grid-cols-4 max-w-4xl">
            <div className="mr-2">
              <div className="text-[3rem] font-bold text-white">01</div>
              <div className="text-[1.5rem] font-bold mb-2">INTRODUCTION</div>
              <div className="text-[1rem] text-left">
                <p>01. What is Climate Change?</p>
                <p>02. Global Warming?</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-white">03</div>
              <div className="text-[1.5rem] font-bold mb-2">CHANGE</div>
              <div className="text-[1rem] text-left">
                <p>04. Air Travel</p>
                <p>05. Lodging</p>
                <p>06. Meals</p>
                <p>07. Miscellaneous</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-white">12</div>
              <div className="text-[1.5rem] font-bold mb-2">PROJECTIONS</div>
              <div className="text-[1rem] text-left">
                <p>12. Entertainment</p>
                <p>13. Professional Fees</p>
                <p>14. Supplies</p>
                <p>15. Telephone</p>
                <p>16. Utilities</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-white">18</div>
              <div className="text-[1.5rem] font-bold mb-2">PROJECT</div>
              <div className="text-[1rem] text-left">
                <p>18. Github</p>
                <p>19. Database Used</p>
              </div>
            </div>
            <div>
              <div className="text-[3rem] font-bold text-white">24</div>
              <div className="text-[1.5rem] font-bold mb-2">Resources</div>
              <div className="text-[1rem] text-left">
                <p>22. Datasets</p>
                <p>23. Citations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
