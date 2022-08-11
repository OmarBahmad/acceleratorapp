import styled from "styled-components"

export const FeaturesContainer = styled.div`
  padding-top: 7.5rem;
  margin-top: 8.75rem;
  margin-bottom: 16.25rem;
  padding-bottom: 2.1875rem;
  width: 100%;
  background-image: linear-gradient(45deg, #f1f8f9, #f1f8f9);
  transform: skewY(-8deg);
  z-index: -1;
`

export const FeaturesContent = styled.div`
  max-width: 70.625rem;
  margin: 0 auto;

  transform: skewY(8deg);
`

export const FeaturesTitleContainer = styled.div`
  margin-top: 2.5rem;
`

export const FeaturesTitle = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3rem;
  color: #111b29;
  margin: 0 0 0.5rem 0;
`

export const FeaturesDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #6b788a;
  margin: 0 0 4.5rem 0;
`

export const FeaturesAllCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  gap: 1.125rem;

  .slider-control-bottomcenter {
    transform: translate(0rem, 2.5rem);
    .paging-dot {
      fill: #206ecf;
    }
  }

  .ZapierIntegration {
    width: 4.5rem;
    height: 1.875rem;
    background-image: url("data:image/svg+xml,%3Csvg width='72' height='31' viewBox='0 0 72 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.2048 13.4771H41.4101C41.3732 13.3434 41.3457 13.1885 41.3274 13.0125C41.2909 12.6701 41.2909 12.3253 41.3274 11.9828C41.3457 11.8073 41.3732 11.6524 41.4101 11.518H45.8827V24.4027C45.6588 24.4381 45.4331 24.4631 45.2064 24.4776C44.9812 24.4933 44.7554 24.5017 44.5296 24.5025C44.3132 24.5013 44.097 24.493 43.8813 24.4776C43.6546 24.463 43.429 24.4379 43.2052 24.4023V13.4765V13.4768L43.2048 13.4771ZM58.775 16.7173C58.775 16.2483 58.7059 15.8006 58.5683 15.3732C58.43 14.9465 58.227 14.5741 57.9609 14.2558C57.6935 13.9379 57.3532 13.6824 56.939 13.4899C56.525 13.2973 56.0326 13.2009 55.462 13.2009C54.3394 13.2009 53.4789 13.5111 52.8808 14.1304C52.2827 14.7498 51.9193 15.612 51.7903 16.7173H58.7752H58.775ZM51.7628 18.5758C51.7997 19.9822 52.2 21.0122 52.9638 21.6648C53.7273 22.3178 54.8548 22.6448 56.3456 22.6448C57.652 22.6448 58.8944 22.4351 60.0723 22.0166C60.2192 22.2677 60.3387 22.5734 60.4309 22.9334C60.5213 23.2839 60.5767 23.6411 60.5965 24.0007C59.9895 24.2357 59.3218 24.4107 58.5953 24.5282C57.8678 24.6451 57.0627 24.704 56.1799 24.704C54.8911 24.704 53.7866 24.5403 52.8669 24.2141C51.9464 23.8872 51.1872 23.4267 50.5891 22.8326C49.991 22.2384 49.5537 21.535 49.2777 20.7228C49.0018 19.911 48.8634 19.0192 48.8634 18.0481C48.8634 17.0937 48.9967 16.202 49.2637 15.373C49.5301 14.5446 49.9405 13.8245 50.492 13.2134C51.0444 12.602 51.7391 12.1166 52.5766 11.7566C53.4136 11.3966 54.4028 11.2163 55.5444 11.2163C56.5197 11.2163 57.3755 11.3672 58.1119 11.6686C58.8478 11.9699 59.4645 12.3844 59.9616 12.9118C60.4584 13.4393 60.8357 14.0672 61.0934 14.7952C61.3509 15.5239 61.4802 16.3149 61.4802 17.169C61.4802 17.4035 61.4704 17.6503 61.4521 17.9097C61.437 18.1318 61.4187 18.3536 61.3971 18.5752H51.7622L51.7625 18.5756L51.7628 18.5758ZM64.491 11.518C64.6831 11.4863 64.8765 11.4612 65.0707 11.4428C65.2543 11.4265 65.448 11.4179 65.6505 11.4179C65.8529 11.4179 66.0551 11.4265 66.2579 11.4428C66.4602 11.4599 66.6444 11.485 66.8101 11.518C66.8648 11.7693 66.9201 12.1003 66.9751 12.5101C67.0303 12.9204 67.0584 13.2676 67.0584 13.5524C67.4447 12.9833 67.9555 12.489 68.5902 12.0703C69.2253 11.6521 70.0396 11.4424 71.0333 11.4424C71.1805 11.4424 71.3323 11.4469 71.4888 11.4553C71.6227 11.4618 71.7566 11.4741 71.8891 11.4926C71.9257 11.6435 71.9539 11.8028 71.9721 11.97C71.9902 12.1373 71.9994 12.3132 71.9994 12.4973C71.9994 12.6984 71.9857 12.9079 71.9582 13.1251C71.9317 13.335 71.8995 13.5443 71.8618 13.7528C71.7126 13.7194 71.5596 13.7026 71.406 13.7027H71.033C70.5362 13.7027 70.0622 13.7655 69.6113 13.8909C69.16 14.0167 68.7554 14.2386 68.3966 14.5564C68.038 14.8748 67.7524 15.3102 67.5412 15.8628C67.3291 16.4154 67.2235 17.127 67.2235 17.9975V24.4023C66.9996 24.4377 66.7738 24.463 66.547 24.4775C66.2989 24.4943 66.0733 24.5024 65.8709 24.5024C65.6452 24.5016 65.4195 24.4933 65.1944 24.4775C64.9586 24.4619 64.7237 24.4369 64.4903 24.4024V11.5182L64.491 11.518ZM45.1152 4.63821C45.1152 4.93882 45.0556 5.23697 44.9391 5.5183C44.6298 5.62426 44.3019 5.67858 43.9714 5.67864H43.9674C43.6368 5.67868 43.309 5.62441 42.9997 5.51843C42.883 5.23705 42.8233 4.9388 42.8233 4.63808V4.63415C42.8233 4.32432 42.8858 4.0276 42.999 3.7538C43.3084 3.64767 43.6363 3.59339 43.9669 3.59358H43.9707C44.3114 3.59358 44.6374 3.65043 44.9384 3.7538C45.055 4.03518 45.1146 4.33343 45.1145 4.63415V4.63808H45.1149L45.1152 4.63821ZM48.4885 3.94126H45.8136L47.7049 2.22052C47.4075 1.84054 47.0424 1.50846 46.6246 1.23799L44.733 2.95873V0.525064C44.4815 0.486574 44.2269 0.467162 43.9718 0.46703H43.9669C43.7075 0.46703 43.4533 0.487204 43.2056 0.525064V2.95873L41.3136 1.23786C41.1052 1.37278 40.9097 1.52335 40.729 1.68799L40.7281 1.68878C40.5474 1.8533 40.382 2.0312 40.2337 2.22065L42.1258 3.94126H39.4502C39.4502 3.94126 39.3866 4.39847 39.3866 4.6348V4.63768C39.3866 4.87402 39.4086 5.10563 39.4504 5.33109H42.1259L40.2336 7.05157C40.5312 7.4315 40.8964 7.76365 41.314 8.03436L43.2058 6.31375V8.74755C43.4532 8.78528 43.7069 8.80519 43.9661 8.80546H43.9726C44.2273 8.80524 44.4816 8.78588 44.7329 8.74755V6.31375L46.6248 8.03476C46.8331 7.89972 47.0288 7.74916 47.2098 7.58463H47.2103C47.3909 7.41993 47.5562 7.2419 47.7045 7.05236L45.8132 5.33122H48.4887C48.5302 5.10589 48.5521 4.87506 48.5521 4.63926V4.63323C48.5521 4.40135 48.5307 4.17013 48.4887 3.94153V3.94126H48.4885ZM0 24.0512L7.45402 13.5022H0.883296C0.828288 13.2009 0.800784 12.8663 0.800784 12.4978C0.800784 12.1463 0.82872 11.8195 0.883872 11.5179H11.5125L11.6508 11.845L4.14158 22.4186H11.1812C11.2363 22.7536 11.2641 23.0966 11.2641 23.4481C11.2641 23.7834 11.2365 24.1014 11.1813 24.4027H0.13824L0 24.0508V24.0512ZM21.5058 18.3495C21.2298 18.3164 20.88 18.2832 20.4568 18.2493C20.0334 18.2162 19.6746 18.1991 19.3805 18.1991C18.2392 18.1991 17.3696 18.3917 16.7718 18.7769C16.1732 19.1623 15.8747 19.748 15.8747 20.5349C15.8747 21.0372 15.9755 21.4307 16.1781 21.7153C16.3803 22.0003 16.6336 22.2176 16.9373 22.3683C17.2411 22.519 17.5766 22.6112 17.9446 22.6448C18.3125 22.6782 18.6624 22.6948 18.9936 22.6948C19.417 22.6948 19.854 22.6738 20.305 22.6319C20.7557 22.5904 21.156 22.5274 21.506 22.4437V18.3495H21.5058ZM21.5058 15.9136C21.5058 14.9253 21.2298 14.2389 20.6778 13.8537C20.1254 13.4686 19.3249 13.276 18.2759 13.276C17.6312 13.276 17.0289 13.3224 16.4677 13.4143C15.9124 13.505 15.3637 13.6265 14.8247 13.7781C14.4747 13.2255 14.3005 12.5646 14.3005 11.7939C14.9255 11.61 15.6155 11.4677 16.3705 11.3672C17.1251 11.2666 17.852 11.2163 18.5517 11.2163C20.392 11.2163 21.7907 11.5976 22.7478 12.3593C23.7046 13.1218 24.1835 14.3397 24.1835 16.0138V24.0761C23.539 24.21 22.757 24.3481 21.8369 24.4905C20.9065 24.6334 19.9645 24.7048 19.021 24.704C18.1192 24.704 17.3045 24.6289 16.5779 24.4782C15.8507 24.3271 15.234 24.0849 14.728 23.7495C14.2214 23.4149 13.8309 22.9879 13.5544 22.4689C13.2785 21.9498 13.1404 21.322 13.1404 20.5851C13.1404 19.8654 13.3014 19.2331 13.6236 18.6887C13.9401 18.1508 14.3889 17.6866 14.9351 17.3325C15.4872 16.9731 16.1221 16.7048 16.8399 16.5292C17.5579 16.3533 18.3122 16.2652 19.1036 16.2652C19.6926 16.2652 20.1757 16.2781 20.5531 16.3032C20.9301 16.3281 21.2478 16.3575 21.5055 16.391V15.9138L21.5058 15.9136ZM29.8981 22.2925C30.2467 22.4096 30.6075 22.4938 30.975 22.5438C31.343 22.5942 31.8211 22.6192 32.4107 22.6192C33.0731 22.6192 33.6802 22.5232 34.2323 22.3306C34.7846 22.1384 35.2584 21.8409 35.6541 21.4389C36.0498 21.0372 36.3626 20.531 36.5927 19.9192C36.8227 19.3085 36.938 18.5845 36.938 17.7469C36.938 16.4075 36.6661 15.3443 36.1236 14.5572C35.5802 13.7704 34.6922 13.3769 33.4596 13.3769C32.9995 13.3769 32.5574 13.4521 32.1348 13.603C31.7108 13.7536 31.3338 13.9797 31.0025 14.281C30.6713 14.5824 30.4044 14.9636 30.2021 15.4239C29.9991 15.8848 29.8983 16.4327 29.8983 17.0691V22.2929V22.2926L29.8981 22.2925ZM27.165 11.5178C27.3522 11.4842 27.5409 11.4592 27.7309 11.4426C27.9283 11.426 28.1264 11.4177 28.3247 11.4177C28.5081 11.4177 28.7012 11.4263 28.9041 11.4426C29.1063 11.4596 29.2995 11.4849 29.4839 11.5179C29.502 11.552 29.5253 11.6561 29.553 11.832C29.5803 12.008 29.608 12.1962 29.6358 12.3969C29.6634 12.598 29.6909 12.791 29.7186 12.9747C29.7462 13.1591 29.7601 13.2764 29.7601 13.3265C29.9437 13.0589 30.1647 12.7991 30.4224 12.548C30.6802 12.2967 30.9888 12.0707 31.3477 11.87C31.7065 11.6689 32.1111 11.51 32.5623 11.3927C33.013 11.2755 33.5146 11.2165 34.0668 11.2165C34.8948 11.2165 35.6633 11.3422 36.3722 11.5935C37.0804 11.845 37.6874 12.2337 38.1938 12.7613C38.6997 13.2888 39.0953 13.9586 39.3808 14.7705C39.666 15.5832 39.8085 16.5417 39.8085 17.6465C39.8085 19.8566 39.1504 21.5858 37.8343 22.833C36.5181 24.0806 34.6552 24.704 32.2442 24.704C31.8391 24.704 31.4253 24.6789 31.0019 24.6287C30.5783 24.5782 30.2105 24.5112 29.8974 24.4279V30.3301C29.6642 30.3646 29.4295 30.3898 29.1938 30.4055C28.9452 30.4218 28.7195 30.4303 28.517 30.4303C28.2914 30.4295 28.0658 30.4212 27.8408 30.4055C27.6141 30.3908 27.3884 30.3657 27.1646 30.3301V11.5179L27.165 11.5178Z' fill='%23FF4A00'/%3E%3C/svg%3E%0A");
  }
  .AndMore {
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='43' viewBox='0 0 42 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='0.430664' width='42' height='42' rx='16' fill='%23206ECF'/%3E%3Cg clip-path='url(%23clip0_447_84)'%3E%3Cpath d='M26.0826 20.6383H22.1138V16.6695C22.1138 16.1431 21.6871 15.7164 21.1607 15.7164C20.6343 15.7164 20.2076 16.1431 20.2076 16.6695V20.6383H16.2388C15.7124 20.6383 15.2857 21.065 15.2857 21.5914C15.2857 22.1178 15.7124 22.5445 16.2388 22.5445H20.2076V26.5133C20.2076 27.0396 20.6343 27.4664 21.1607 27.4664C21.6871 27.4664 22.1138 27.0396 22.1138 26.5133V22.5445H26.0826C26.609 22.5445 27.0357 22.1178 27.0357 21.5914C27.0357 21.065 26.609 20.6383 26.0826 20.6383Z' fill='white' stroke='white' stroke-width='0.5'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_447_84'%3E%3Crect width='13.5' height='13.5' fill='white' transform='translate(14.25 14.6807)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  }
`

export const FeaturesCardsButtonContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
    min-width: 13.75rem;
  }
`

export const FeaturesCardsButton = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 150%;
  color: #206ecf;
  border: none;
  padding: 0.5625rem 0.875rem;
  gap: 0.625rem;
  border: 0.0625rem solid rgba(32, 110, 207, 0.25);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`