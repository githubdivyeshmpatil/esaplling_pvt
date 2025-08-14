import Navbar from './Navbar'
import VideoSection from './VideoSection'

function Training() {
  return (
   <>
    <Navbar />
         <div className="max-w-9xl">
  <div
  className="w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-10 mt-32"
  style={{
    backgroundImage: "url('/img/EHS_banner.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'contain',       
  }}
>


</div>
<div className='px-4 sm:px-6 md:px-12 lg:px-20 py-6 mt-[-40px]'>
    <p>Environmental Health and Safety (EHS) training videos aim to educate individuals on workplace safety, environmental protection, and overall well-being. These videos cover a wide range of topics, including hazard identification, emergency procedures, and the importance of a healthy and safe work environment. They often emphasize the interconnectedness of workplace safety, environmental sustainability, and community well-being.</p>
</div>
<VideoSection/>
      </div>
    <div class="px-4 sm:px-6 md:px-12 lg:px-20 py-6 mt-[-350px]">
  <p class="mb-4"><strong>ACCIDENT:</strong> An unplanned or undesired event that can result in harm to people, property, or the environment.</p>

  <p class="mb-4"><strong>INCIDENT:</strong> An event that results in death or injury to a person where the injury requires medical attention (including first aid); results in injury/damage to persons, property, or process; or is not in compliance with statutory requirements, safe work procedures, or in-house guidelines.</p>

  <p class="mb-4"><strong>NEAR MISS:</strong> A Near Miss is an event where no contact or exchange of energy occurred and thus did not result in personal injury, asset loss, or damage to the environment.</p>

  <p class="mb-4"><strong>HAZARD:</strong> A source or a situation with a potential to cause harm, including human injury or ill health, damage to property, damage to the environment, or a combination of both.</p>

  <p class="mb-4"><strong>LOST TIME INJURY (LTI):</strong> Work-related injury or illness that renders the injured person unable to perform any of their duties or return to work on a scheduled work shift, on any day immediately following the day of the accident.</p>

  <p class="mb-4"><strong>PERSONAL PROTECTIVE EQUIPMENT (PPE):</strong> All equipment and clothing intended to be utilized, which affords protection against one or more risks to health and safety. This includes protection against adverse weather conditions.</p>

  <p class="mb-4"><strong>RISK:</strong> A measure of the likelihood that the harm from a particular hazard will occur, taking into account the possible severity of the harm.</p>

  <p class="mb-4"><strong>RISK ASSESSMENT:</strong> The process of analyzing the level of risk considering those in danger, and evaluating whether hazards are adequately controlled, taking into account any measures already in place.</p>

  <p class="mb-4"><strong>RISK MANAGEMENT:</strong> The process of identifying hazards, assessing risk, taking action to eliminate or reduce risk, and monitoring and reviewing results.</p>

  <p class="mb-4"><strong>TRAINING:</strong> The process of imparting specific skills and understanding to undertake defined tasks.</p>

  <p class="mb-4"><strong>UNSAFE ACT OR CONDITION:</strong> Any act or condition that deviates from a generally recognized safe way or specified method of doing a job and increases the potential for an accident.</p>

  <p class="mb-4"><strong>SWL:</strong> Safe Working Load.</p>
</div>


   </>
  )
}

export default Training