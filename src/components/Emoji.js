import { useState } from 'react';
import { Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const Emoji = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const emojiUrls = [
    "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2358000/d1c4106e468b1f0f84406dc08c4570c9/266x266-Q90_d1c4106e468b1f0f84406dc08c4570c9.png",
    "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2068009/d244c0098bb6d158cc9572bf9e0cfcef/266x266-Q90_d244c0098bb6d158cc9572bf9e0cfcef.png",
    "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4055987/2a0898e9cba9fa25e19a8f4e140f949e/266x266-Q90_2a0898e9cba9fa25e19a8f4e140f949e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4055980/ca52fae306ee39866f7eaa0377582479/266x266-Q90_ca52fae306ee39866f7eaa0377582479.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015372/4c47d77a21b785c0c33e08cc26444965/266x266-Q90_4c47d77a21b785c0c33e08cc26444965.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015383/614130db17be36cbb2238f41b056d1f5/266x266-Q90_614130db17be36cbb2238f41b056d1f5.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015375/4468681eacc938996bdc45eb9ea48cc1/266x266-Q90_4468681eacc938996bdc45eb9ea48cc1.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015380/733765d59e8c7bbfa742ab4ff714bb11/266x266-Q90_733765d59e8c7bbfa742ab4ff714bb11.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3979236/7c8c7ceedbbe4cbe4f8f047af1ab8990/266x266-Q90_7c8c7ceedbbe4cbe4f8f047af1ab8990.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3979242/dfdf5ebd2138504affcc133e6657f9c7/266x266-Q90_dfdf5ebd2138504affcc133e6657f9c7.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3979239/1de73f0be2b2a334b1a0ced7d1d7828b/266x266-Q90_1de73f0be2b2a334b1a0ced7d1d7828b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3898887/76cf96f7c4d7364d6cb249e301f6dd99/266x266-Q90_76cf96f7c4d7364d6cb249e301f6dd99.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3898892/f528d97921ccaa93c5b9b995553665ed/266x266-Q90_f528d97921ccaa93c5b9b995553665ed.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916138/04d6002be44c483fca19b3735d395d3b/266x266-Q90_04d6002be44c483fca19b3735d395d3b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916141/c6bb1a54e8e5101db41360727a9a2a9f/266x266-Q90_c6bb1a54e8e5101db41360727a9a2a9f.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916146/422df1549af54ca7e9a71804c9061ef7/266x266-Q90_422df1549af54ca7e9a71804c9061ef7.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916153/c5fb3e7a287aeb510cf98be2731542f7/266x266-Q90_c5fb3e7a287aeb510cf98be2731542f7.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053016/57e270e281e349bc4444559b4721c665/266x266-Q90_57e270e281e349bc4444559b4721c665.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3027790/06f835d69eec5557c5fc2d379f368454/266x266-Q90_06f835d69eec5557c5fc2d379f368454.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052937/200fb73c921b68d18b10043d6998029e/266x266-Q90_200fb73c921b68d18b10043d6998029e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3815917/50e3dc4533893d1f50a138b4bc736f27/266x266-Q90_50e3dc4533893d1f50a138b4bc736f27.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052978/76fb0479f1866c62b07fdfe37fe96d8f/266x266-Q90_76fb0479f1866c62b07fdfe37fe96d8f.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2071440/b2ebf74e7fa6f1106398023ad48b0c4c/266x266-Q90_b2ebf74e7fa6f1106398023ad48b0c4c.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2067795/7644acc86d65bbc4711053294991f3c9/266x266-Q90_7644acc86d65bbc4711053294991f3c9.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3803866/12961ebb8d20e24d5b4cf4e712184698/266x266-Q90_12961ebb8d20e24d5b4cf4e712184698.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3803868/2c35c6f0c5f625ff215615215b5e8f3f/266x266-Q90_2c35c6f0c5f625ff215615215b5e8f3f.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3803869/b2de0e46d76a685b81fafb8b76ac768b/266x266-Q90_b2de0e46d76a685b81fafb8b76ac768b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052947/e793489b339baa85c52654e17f34a92b/266x266-Q90_e793489b339baa85c52654e17f34a92b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070033/c70731cc550e7c549f1226dffc817947/266x266-Q90_c70731cc550e7c549f1226dffc817947.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3008609/836987724f3a062ca8f4a733f75a5b69/266x266-Q90_836987724f3a062ca8f4a733f75a5b69.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3061263/804b79eec2b445ede43d2d351be2afbf/266x266-Q90_804b79eec2b445ede43d2d351be2afbf.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070022/eec70798574358de7482784847f91b79/266x266-Q90_eec70798574358de7482784847f91b79.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069583/fac84c1fdc1a4c4a930f1bc6a9713687/266x266-Q90_fac84c1fdc1a4c4a930f1bc6a9713687.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2068093/ef6f2981d7f29af64287870245888f0e/266x266-Q90_ef6f2981d7f29af64287870245888f0e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069560/e4560098a08fd59c8d6a58c49983b1ef/266x266-Q90_e4560098a08fd59c8d6a58c49983b1ef.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2998769/cd82434c8c7a2ad0e360fb5eb5bfa406/266x266-Q90_cd82434c8c7a2ad0e360fb5eb5bfa406.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052139/196712cfd056cd01e95fb9ee26a27157/266x266-Q90_196712cfd056cd01e95fb9ee26a27157.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357990/afbeb911f96d24b2fcb37b32134a898e/266x266-Q90_afbeb911f96d24b2fcb37b32134a898e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2717871/2c99aefb1c5c9b806829ec70ae048e74/266x266-Q90_2c99aefb1c5c9b806829ec70ae048e74.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052942/3bf872fafabc67038a5caf309c88d887/266x266-Q90_3bf872fafabc67038a5caf309c88d887.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053125/5df3c410697669ec9a989276ed113fea/266x266-Q90_5df3c410697669ec9a989276ed113fea.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357981/ba5dcc0f8e901d3d0d564ab7e79f43f1/266x266-Q90_ba5dcc0f8e901d3d0d564ab7e79f43f1.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357978/908ad609a161f5dcdd3679541da22ff4/266x266-Q90_908ad609a161f5dcdd3679541da22ff4.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357970/544a1bcabceda5efc9ac596c644a9967/266x266-Q90_544a1bcabceda5efc9ac596c644a9967.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357975/e6db6badc9c42419b2a9f4241b61ed2e/266x266-Q90_e6db6badc9c42419b2a9f4241b61ed2e.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2101061/93b023839c2c31e7d0866e88974ddc08/266x266-Q90_93b023839c2c31e7d0866e88974ddc08.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052188/13d884813ec11cbac25939df449bdba9/266x266-Q90_13d884813ec11cbac25939df449bdba9.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053147/dc5d60577846acc149ed7591012131c2/266x266-Q90_dc5d60577846acc149ed7591012131c2.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053098/f9a610030037fe02bdd92b4616a27911/266x266-Q90_f9a610030037fe02bdd92b4616a27911.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3815911/ed5909a586b2484882ba33cefe17857b/266x266-Q90_ed5909a586b2484882ba33cefe17857b.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3027832/7f6de0214a500aedde699c0de37da579/266x266-Q90_7f6de0214a500aedde699c0de37da579.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3676661/292f97d4c97673d22df7a9e23b28014a/266x266-Q90_292f97d4c97673d22df7a9e23b28014a.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3676679/fed3405087cb4a5626a6f50db0527b5f/266x266-Q90_fed3405087cb4a5626a6f50db0527b5f.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3676694/3634ee0f4fa2a39d33e38ba53cc05fb5/266x266-Q90_3634ee0f4fa2a39d33e38ba53cc05fb5.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3068563/e918394cd245dda884b0b701fc2cb8ca/266x266-Q90_e918394cd245dda884b0b701fc2cb8ca.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3068650/7c4ccff1fe4f5af2efe4ce637781f8ff/266x266-Q90_7c4ccff1fe4f5af2efe4ce637781f8ff.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052942/3bf872fafabc67038a5caf309c88d887/266x266-Q90_3bf872fafabc67038a5caf309c88d887.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2101073/b59f63dd777d04055750659308151db6/266x266-Q90_b59f63dd777d04055750659308151db6.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2717979/956390d7546f2742adb740ab45fc0b05/266x266-Q90_956390d7546f2742adb740ab45fc0b05.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2717968/055fc688b9d0285787bfd3b648122daf/266x266-Q90_055fc688b9d0285787bfd3b648122daf.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2120878/991485b355332b1804f9af455cd56bc3/266x266-Q90_991485b355332b1804f9af455cd56bc3.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2071440/b2ebf74e7fa6f1106398023ad48b0c4c/266x266-Q90_b2ebf74e7fa6f1106398023ad48b0c4c.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052166/ea76f2c748fb1513a8080e7a8a2cf39c/266x266-Q90_ea76f2c748fb1513a8080e7a8a2cf39c.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070881/6ed543d7f0d8f65e6b43149cc1763d73/266x266-Q90_6ed543d7f0d8f65e6b43149cc1763d73.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070879/45538a41157569197c37aa4b65af74e6/266x266-Q90_45538a41157569197c37aa4b65af74e6.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2073461/7bd2191b76a19e8adb0288bb9d9115c7/266x266-Q90_7bd2191b76a19e8adb0288bb9d9115c7.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3061302/6546a4d5ac163fba1567302e7b391a85/266x266-Q90_6546a4d5ac163fba1567302e7b391a85.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3061263/804b79eec2b445ede43d2d351be2afbf/266x266-Q90_804b79eec2b445ede43d2d351be2afbf.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2700640/faef2118d83a733eb0d861d901ead74b/266x266-Q90_faef2118d83a733eb0d861d901ead74b.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2073744/349e0e574b52bf2048e9afa1d6092aaa/266x266-Q90_349e0e574b52bf2048e9afa1d6092aaa.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2073745/c2cd584f55c26ba2fcebcd3cf867d4d3/266x266-Q90_c2cd584f55c26ba2fcebcd3cf867d4d3.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070022/eec70798574358de7482784847f91b79/266x266-Q90_eec70798574358de7482784847f91b79.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2719852/182432b24c8f4e6a94a70d9618ab2c04/266x266-Q90_182432b24c8f4e6a94a70d9618ab2c04.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2132067/86bfb422a4d1782784da6c89b14816e0/266x266-Q90_86bfb422a4d1782784da6c89b14816e0.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069583/fac84c1fdc1a4c4a930f1bc6a9713687/266x266-Q90_fac84c1fdc1a4c4a930f1bc6a9713687.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069563/0459ca3192cef0a9dcd6b2c007309975/266x266-Q90_0459ca3192cef0a9dcd6b2c007309975.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069560/e4560098a08fd59c8d6a58c49983b1ef/266x266-Q90_e4560098a08fd59c8d6a58c49983b1ef.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2998769/cd82434c8c7a2ad0e360fb5eb5bfa406/266x266-Q90_cd82434c8c7a2ad0e360fb5eb5bfa406.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2092972/2c56a2545ed3213ca04c1ac7a17e25f2/266x266-Q90_2c56a2545ed3213ca04c1ac7a17e25f2.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2092965/f6dcedd367f8d7e681bbd9921b345e30/266x266-Q90_f6dcedd367f8d7e681bbd9921b345e30.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2068098/ad3c0c6f0e5f43fec75d04ed3ed7111d/266x266-Q90_ad3c0c6f0e5f43fec75d04ed3ed7111d.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053136/c3a99a5e36f42badc1ba5a265ae30ecc/266x266-Q90_c3a99a5e36f42badc1ba5a265ae30ecc.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052139/196712cfd056cd01e95fb9ee26a27157/266x266-Q90_196712cfd056cd01e95fb9ee26a27157.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357987/5fdda85cdcea2e6cbd574729e03b28b2/266x266-Q90_5fdda85cdcea2e6cbd574729e03b28b2.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069609/8dd09345b48f0b31ed2ccbb1c44c341e/266x266-Q90_8dd09345b48f0b31ed2ccbb1c44c341e.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052154/3c5dbd33ae9d47dcf0ecf8f7db87b285/266x266-Q90_3c5dbd33ae9d47dcf0ecf8f7db87b285.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2358006/d29097d04e77b7f0849bc1e98c7f216f/266x266-Q90_d29097d04e77b7f0849bc1e98c7f216f.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357993/a9c69ad8d05c4f73cb22a4c7dd523210/266x266-Q90_a9c69ad8d05c4f73cb22a4c7dd523210.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052160/f32c2a869916ba7a06664c40f699b2fb/266x266-Q90_f32c2a869916ba7a06664c40f699b2fb.png",
   "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2067801/4f7fbf34120198b1a5ee5f4afdda6cc7/266x266-Q90_4f7fbf34120198b1a5ee5f4afdda6cc7.png",
  ];
  
  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleHoverEnd = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  const handleClick = async(emojiUrl) => {
    const isConfirmed = window.confirm("Are you sure you want to select this emoji?");
    
    if (isConfirmed) {
        setSelectedEmoji(emojiUrl);
        sessionStorage.setItem("emoji", decodeURIComponent(emojiUrl));
        try {
          const response = await axios.post('http://localhost:5000/emoji', {uniqueName:sessionStorage.getItem('uniqueName'),emojiUrl:emojiUrl});
          console.log(response.data);
        } catch(error){
          console.error(error);
        }
    }
  };

  return (
    <div className="homeContainer6">
      <h1 className="textStyle9">PICK YOUR EMOJI</h1>
      <div className="emojiContainer">
        {emojiUrls.map((emojiUrl, index) => (
          <div key={index} className="emojiWrapper">
            <Link to="/mainpage">
              <button onClick={() => handleClick(emojiUrl)}>
                <img
                  src={emojiUrl}
                  alt={`Emoji ${index + 1}`}
                  className={`emojiStyle ${selectedEmoji === emojiUrl ? 'selected' : ''}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emoji;