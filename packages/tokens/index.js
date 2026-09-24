/**
 * Shared branding & design tokens for Silent Mode Control
 * Inspired by Tekromancy Design System (github.com/tekromancy/blog)
 */

export const BRAND = {
  name: 'Silent Mode Control',
  proName: 'Silent Mode Control Pro',
  tagline: 'Granular call screening & scheduling for Android',
  author: 'Tekromancy',
  domain: 'smc.tekromancy.com',
  playStoreFreeUrl: 'https://play.google.com/store/apps/details?id=com.tekromancy.silentmodecontrol',
  playStoreProUrl: 'https://play.google.com/store/apps/details?id=com.tekromancy.silentmodecontrolpro',
  currentVersion: '1.0.2',
};


export const TELECOM_MODES = {
  RING_AND_VIBRATE: { id: 'ring_and_vibrate', label: 'Ring & Vibrate', color: '#16a34a' },
  RING_ONLY: { id: 'ring_only', label: 'Ring Only', color: '#2563eb' },
  VIBRATE_ONLY: { id: 'vibrate_only', label: 'Vibrate Only', color: '#ea580c' },
  SILENT: { id: 'silent', label: 'Silent / Mute', color: '#9333ea' },
  BLOCK: { id: 'block', label: 'Block Call', color: '#dc2626' },
};
